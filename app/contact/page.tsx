import { Clock3, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { FullBleedHero } from '@/components/FullBleedHero';
import { createPageMetadata } from '@/lib/seo';
import styles from './contact.module.css';

export const metadata = createPageMetadata({
  title: 'Contact Quiet Gears',
  description: 'Discuss an AI decision, software build or operating problem with Quiet Gears.',
  path: '/contact',
});

export default function Contact() {
  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/studio-table-desktop.webp"
      mobileSrc="/images/rebrand/studio-table-mobile.webp"
      eyebrow="Contact"
      title="Start a conversation."
      summary="Tell us what is slowing the work or what you need to build."
      focalPosition="50% 49%"
    />
    <section className={styles.contact}>
      <div className={styles.details}>
        <h2>Project enquiry</h2>
        <p>Share the useful context. You do not need a finished brief.</p>
        <div className={styles.facts}>
          <div><Mail aria-hidden="true"/><span>Email<a href="mailto:enquiries@quietgears.xyz">enquiries@quietgears.xyz</a></span></div>
          <div><MapPin aria-hidden="true"/><span>Based in<b>London · UK-wide</b></span></div>
          <div><Clock3 aria-hidden="true"/><span>Response time<b>A reply within one working day</b></span></div>
        </div>
      </div>
      <div className={styles.form}><ContactForm /></div>
    </section>
  </>;
}
