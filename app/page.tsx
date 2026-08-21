import { getImageProps } from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { Reveal } from '@/components/Reveal';
import styles from './home.module.css';

const services = [
  { n: '01', title: 'AI strategy', slug: 'ai-strategy', text: 'Prioritise investable use cases, define the operating model and establish accountable governance.' },
  { n: '02', title: 'AI implementation', slug: 'ai-implementation', text: 'Engineer production systems around approved data, clear controls and measurable performance.' },
  { n: '03', title: 'Agents and automation', slug: 'agentic-ai', text: 'Redesign multi-step work and assign automation only the authority it can safely exercise.' },
  { n: '04', title: 'Modern applications', slug: 'legacy-modernisation', text: 'Replace operational friction with focused software designed around real decisions and hand-offs.' },
  { n: '05', title: 'AI assistants', slug: 'ai-chatbot', text: 'Make approved organisational knowledge available with grounded answers and visible escalation.' },
  { n: '06', title: 'Training and adoption', slug: 'chatgpt-training-for-teams', text: 'Transfer the capability, standards and working practices required for controlled scale.' },
];

const process = [
  ['01', 'Find the friction', 'Trace where time, margin or momentum is being lost.'],
  ['02', 'Design the system', 'Shape the smallest, strongest solution for the opportunity.'],
  ['03', 'Build and learn', 'Ship a working release, test it with real users and improve quickly.'],
  ['04', 'Scale what works', 'Embed the system, train the team and expand the gains.'],
];

function HeroImage() {
  const common = { alt: '', sizes: '100vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, width: 1672, height: 941, src: '/images/quiet-gears-workshop-hero.webp' });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, width: 1122, height: 1402, src: '/images/quiet-gears-workshop-hero-mobile.webp' });

  return (
    <picture className={styles.heroMedia} aria-hidden="true">
      <source media="(min-width: 801px)" srcSet={desktop} />
      <source media="(max-width: 800px)" srcSet={mobile} />
      <img {...rest} className={styles.heroImage} fetchPriority="high" />
    </picture>
  );
}

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-title">
        <HeroImage />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <h1 id="home-title" className={styles.wordmark}><span>Quiet</span><span>Gears</span></h1>
          <p className={styles.heroHeadline}>Put AI to work. Keep moving.</p>
          <p className={styles.heroSupport}>Senior AI advisory, production engineering and adoption support for ambitious UK SMEs.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="/contact">Start a conversation <ArrowRight size={17} /></Link>
            <Link className={styles.secondaryAction} href="#services">Explore our services <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="opportunity-title">
        <Reveal className={styles.introInner}>
          <span className={styles.kicker}>The opportunity</span>
          <h2 id="opportunity-title">Good technology should make work feel lighter.</h2>
          <div className={styles.introCopy}>
            <p>Useful AI is not a chatbot bolted onto a broken process. It is a well-designed system focused on a real constraint, connected to the right data and built for the people who use it.</p>
            <p>Quiet Gears combines senior advisory discipline with hands-on engineering. Each engagement is bounded by a clear business case, defined controls and evidence that supports the next decision.</p>
          </div>
        </Reveal>
      </section>

      <section className={styles.services} id="services" aria-labelledby="services-title">
        <div className={styles.sectionHeading}>
          <div><span className={styles.kicker}>What we do</span><h2 id="services-title">Useful technology.<br /><em>Quietly delivered.</em></h2></div>
          <p>From first question to working system, we make advanced technology practical for established SMEs.</p>
        </div>
        <div className={styles.serviceField}>
          {services.map(({ n, title, text, slug }) => (
            <Reveal className={`${styles.serviceItem} ${styles[`service${n}`]}`} key={title}>
              <Link href={`/services/${slug}`}>
                <PrecisionLabel index={n} label="Capability" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Link className={styles.allServices} href="/services">View all services <ArrowRight size={17} /></Link>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.processHeading}>
          <span className={styles.kicker}>How we work</span>
          <h2 id="process-title">Specialist focus.<br /><em>Serious momentum.</em></h2>
          <p>We keep the distance between decision and delivery short. You work directly with the people thinking, designing and building.</p>
          <Link className={styles.processLink} href="/about">See the full process <ArrowRight size={17} /></Link>
        </div>
        <div className={styles.processMechanism} role="list" aria-label="Delivery sequence">
          {process.map(([number, title, detail]) => (
            <article key={number} role="listitem">
              <PrecisionLabel index={number} label="Stage" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <span className={styles.kicker}>The next move</span>
        <h2 id="cta-title">Turn friction into<br />forward motion.</h2>
        <p>Bring us the stubborn process, missed opportunity or system that no longer fits.</p>
        <Link className={styles.ctaAction} href="/contact">Book a free consultation <ArrowRight size={17} /></Link>
      </section>
    </>
  );
}
