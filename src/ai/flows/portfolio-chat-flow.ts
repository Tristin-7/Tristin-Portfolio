'use server';

/**
 * @fileOverview A portfolio chatbot AI agent.
 *
 * - portfolioChat - A function that handles the portfolio chat process.
 * - PortfolioChatInput - The input type for the portfolioChat function.
 * - PortfolioChatOutput - The return type for the portfolioChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  navItems,
  socialLinks,
  projects,
  experiences,
  certificates,
  education,
  technicalSkills,
  softSkills,
} from '@/config/site';

const PortfolioChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  question: z.string().describe('The user\'s question about the portfolio.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.string();
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;

const portfolioInfo = `
  About Tristin Van Der Lingen:
  I am a Systems Support Associate with a strong interest in technology and continuous learning. I am currently enhancing my skills through Coursera courses in machine learning, Python, AI, professional communications, and professional development, while actively working on practical AI projects such as an AI resume builder as part of an AI bootcamp. My goal is to leverage these skills and project experience to contribute to innovative technology solutions and further develop my expertise in AI and related fields.

  Nav Items: ${JSON.stringify(navItems)}
  Social Links: ${JSON.stringify(socialLinks)}
  Projects: ${JSON.stringify(projects)}
  Experience: ${JSON.stringify(experiences)}
  Certificates: ${JSON.stringify(certificates)}
  Education: ${JSON.stringify(education)}
  Technical Skills: ${JSON.stringify(technicalSkills)}
  Soft Skills: ${JSON.stringify(softSkills)}
`;

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const { history, question } = input;

    const prompt = `You are an AI assistant for Tristin Van Der Lingen's portfolio. Your role is to answer questions about Tristin based *only* on the information provided below. Be friendly and professional. If a question is outside the scope of this information, politely decline to answer.

    Portfolio Information:
    ${portfolioInfo}

    The user has asked the following question:
    ${question}
    `;

    const llm = ai.model('googleai/gemini-2.5-flash');
    const response = await llm.generate({
      history: history.map(h => ({
        role: h.role,
        content: [{text: h.content}]
      })),
      prompt,
    });

    return response.text;
  }
);

export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}
