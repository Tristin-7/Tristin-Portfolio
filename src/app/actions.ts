'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/emails/contact-template';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);
// This should be your own domain, see https://resend.com/docs/send-with-custom-domain
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['vanderlingentristin3@gmail.com'], // Your email here
      subject: `New message from ${name} on your portfolio`,
      react: ContactEmailTemplate({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        message: 'There was an error sending your message. Please try again later.',
        success: false,
        errors: {},
      };
    }

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      message: 'Something went wrong. Please try again.',
      success: false,
      errors: {},
    };
  }
}
