import { getImageProps } from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import styles from './home.module.css';

const services = [
  { n: '01', title: 'AI strategy', slug: 'ai-strategy', text: 'Find the opportunities worth pursuing and shape a practical route from first experiment to operating advantage.' },
  { n: '02', title: 'AI implementation', slug: 'ai-implementation', text: 'Connect capable models to the systems and workflows your teams already rely on.' },
  { n: '03', title: 'Agents and automation', slug: 'agentic-ai', text: 'Remove repetitive multi-step work while keeping people in control of consequential decisions.' },
  { n: '04', title: 'Modern applications', slug: 'legacy-modernisation', text: 'Build focused internal software, portals and tools around the way your business actually works.' },
  { n: '05', title: 'AI assistants', slug: 'ai-chatbot', text: 'Turn approved knowledge into useful, grounded support for customers and employees.' },
  { n: '06', title: 'Training and adoption', slug: 'chatgpt-training-for-teams', text: 'Give teams the confidence, practice and operating habits needed to make new systems stick.' },
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
          <p className={styles.heroSupport}>We design and deploy practical AI systems and specialist software for ambitious UK SMEs.</p>
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
            <p>Quiet Gears brings senior thinking and hands-on delivery together. No theatre or sprawling transformation programme—just high-quality systems that earn their place.</p>
          </div>
        </Reveal>
      </section>

      <section className={styles.services} id="services" aria-labelledby="services-title">
        <div className={styles.sectionHeading}>
          <div><span className={styles.kicker}>What we do</span><h2 id="services-title">Useful technology.<br /><em>Quietly delivered.</em></h2></div>
          <p>From first question to working system, we make advanced technology practical for established SMEs.</p>
        </div>
        <div className={styles.serviceList}>
          {services.map(({ n, title, text, slug }) => (
            <Reveal className={styles.serviceReveal} key={title}>
              <Link className={styles.serviceRow} href={`/services/${slug}`}>
                <span className={styles.serviceNumber}>{n}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" />
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
        <ol className={styles.processSteps}>
          {process.map(([number, title, detail]) => (
            <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div></li>
          ))}
        </ol>
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
