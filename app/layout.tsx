import type { Metadata } from 'next';
import { Instrument_Serif, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import './tailwind.css';
import { Header, Footer } from '@/components/Shell';

const display = Instrument_Serif({ subsets: ['latin'], variable: '--display', weight: '400' });
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--body', weight: 'variable' });

export const metadata: Metadata = {
  metadataBase: new URL('https://quietgears.co.uk'),
  title: { default: 'Quiet Gears | AI systems for ambitious SMEs', template: '%s | Quiet Gears' },
  description: 'London-based AI consulting, automation and software for UK SMEs.',
  openGraph: { title: 'Quiet Gears', description: 'AI systems that keep business moving.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const readingModeInitializer = `(function(){try{var mode=localStorage.getItem('quiet-gears-reading-mode');document.documentElement.dataset.readingMode=mode==='simple'?'simple':'advanced'}catch(e){document.documentElement.dataset.readingMode='advanced'}})();`;
  return <html lang="en" data-reading-mode="advanced" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: readingModeInitializer }}/></head><body className={`${display.variable} ${body.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
