import type { Metadata } from 'next';
import { Montserrat, Cinzel, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ELITE | Shaping Sovereign Landmarks - Architectural Wood Engineering',
  description: 'ELITE is Saudi Arabia’s premier architectural wood engineering company, delivering iconic sovereign, ministerial, and landmark projects in Riyadh.',
  icons: {
    icon: '/elite/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${montserrat.variable} ${cinzel.variable} ${arabic.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('elite_lang');
                  if (saved === 'ar') {
                    document.documentElement.dir = 'rtl';
                    document.documentElement.lang = 'ar';
                    document.documentElement.classList.add('font-arabic');
                    document.documentElement.classList.remove('font-sans');
                  } else {
                    document.documentElement.dir = 'ltr';
                    document.documentElement.lang = 'en';
                    document.documentElement.classList.add('font-sans');
                    document.documentElement.classList.remove('font-arabic');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-obsidian antialiased selection:bg-gold selection:text-obsidian">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
