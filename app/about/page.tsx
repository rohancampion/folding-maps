import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { createPageMetadata } from '@/lib/seo';
import styles from './about.module.css';

export const metadata = createPageMetadata({
  title: 'About Quiet Gears',
  description: 'Quiet Gears is a senior-led London studio that advises UK SMEs and builds focused AI software.',
  path: '/about',
});

const leadConsultants = ['Rohan Campion', 'Luc Balonwu'];

export default function About() {
  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/studio-table-desktop.webp"
      mobileSrc="/images/rebrand/studio-table-mobile.webp"
      eyebrow="About Quiet Gears"
      title="Senior people. Close to the work."
      summary="A small London studio for UK SMEs that need sound advice and software that holds up in practice."
      focalPosition="50% 50%"
    />

    <section className={styles.studio} aria-labelledby="studio-title">
      <p>Our studio</p>
      <h2 id="studio-title">We find the operational drag, decide what should change and build the focused release. AI earns its place only when it improves the work.</h2>
    </section>

    <section className={styles.people} aria-labelledby="people-title">
      <div className={styles.peopleHeading}><p>People</p><h2 id="people-title">The people you meet do the work.</h2></div>
      <div className={styles.consultantList}>{leadConsultants.map((name, index) => <article key={name}>
        <span>0{index + 1}</span><h3>{name}</h3><p>Lead consultant</p>
      </article>)}</div>
    </section>

    <section className={`${styles.cta} contact-band`}>
      <h2>Bring us the stubborn problem.</h2>
      <Link href="/contact">Start a conversation <ArrowRight size={17} /></Link>
    </section>
  </>;
}
