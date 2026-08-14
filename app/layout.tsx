import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/Shell';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://quietgears.co.uk'),
  title: { default: 'quiet gears — AI systems for ambitious SMEs', template: '%s — quiet gears' },
  description: 'London-based AI consulting, automation and software for UK SMEs.',
  openGraph: { title: 'quiet gears', description: 'AI systems that keep business moving.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}
