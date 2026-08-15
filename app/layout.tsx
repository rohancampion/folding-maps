import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/Shell';

const display = Instrument_Serif({ subsets: ['latin'], variable: '--display', weight: '400' });
const body = DM_Sans({ subsets: ['latin'], variable: '--body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://quietgears.co.uk'),
  title: { default: 'Quiet Gears | AI systems for ambitious SMEs', template: '%s | Quiet Gears' },
  description: 'London-based AI consulting, automation and software for UK SMEs.',
  openGraph: { title: 'Quiet Gears', description: 'AI systems that keep business moving.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
