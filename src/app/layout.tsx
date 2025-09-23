import type { Metadata } from 'next';
import './globals.css';
import './glitch.css';
import './magnetic.css';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteBody } from '@/components/site-body';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="matrix"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <SiteBody>
            {children}
          </SiteBody>
          <Chatbot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
