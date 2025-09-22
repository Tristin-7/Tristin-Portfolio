import type { Metadata } from 'next';
import './globals.css';
import './glitch.css';
import './portal.css';
import { Toaster } from '@/components/ui/toaster';
import MatrixAnimation from '@/components/matrix-animation';
import { Chatbot } from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A professional portfolio for showcasing skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <MatrixAnimation />
        <div className="relative z-10">
          {children}
        </div>
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
