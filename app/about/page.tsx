import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CircleCheck,
  Gauge,
  Hammer,
  Handshake,
  Mail,
  MapPin,
  Network,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import styles from './about.module.css';

export const metadata = createPageMetadata({
  title: 'About Quiet Gears',
  description: 'Senior AI advice, production software and team enablement for UK SMEs, delivered by Quiet Gears consultants in London.',
  path: '/about',
});

const atAGlance = [
  ['Decision brief', 'Priority, budget range and controls'],
  ['Working release', 'Software ready for staff use'],
  ['Operating pack', 'Access, support and service records'],
  ['Handover', 'Documentation and staff training'],
];

const reasons = [
  { Icon: UsersRound, title: 'Senior consultant responsibility', body: 'A lead consultant remains responsible for the client relationship, delivery quality and final acceptance.' },
  { Icon: SearchCheck, title: 'Defined scope', body: 'Every proposal states the deliverable, acceptance criteria, cost range and client responsibilities.' },
  { Icon: Hammer, title: 'Production assets', body: 'Software, integrations, interfaces, terminals and documentation are delivered as usable client assets.' },
  { Icon: ShieldCheck, title: 'Security controls', body: 'Role-based access, source restrictions, approval authority and audit records are defined for business use.' },
  { Icon: Gauge, title: 'Evidence at review', body: 'Accepted tasks, staff effort, elapsed time, service errors and operating cost form the review record.' },
  { Icon: RefreshCw, title: 'Complete handover', body: 'The client receives the repository, service documentation, training materials and support pack.' },
];

const expansion = [
  ['Decision pack', 'Executive approval', 'Investment brief, ranked opportunities, budget range and control requirements.'],
  ['First release', 'Operational acceptance', 'Production application, approved integration, user interface and evaluation report.'],
  ['Operating service', 'Staff use', 'Access permissions, dashboards, service records, training and support documentation.'],
  ['Expansion pack', 'Additional capacity', 'Approved users, sites, channels, task groups and connected systems.'],
];

const pathways = [
  {
    image: '/images/rebrand/research-fern-desktop.webp',
    group: 'Advise',
    title: 'Approve the right investment',
    detail: 'Receive ranked opportunities, commercial assumptions, risks, budget range and a recommended decision.',
    services: 'Decision briefs and controls',
    href: '/services/ai-strategy',
  },
  {
    image: '/images/rebrand/services-workbench-desktop.webp',
    group: 'Build',
    title: 'Put a production service in use',
    detail: 'Receive the application, integrations, interfaces, terminals, evaluation report and support documentation.',
    services: 'Software and AI applications',
    href: '/services/ai-implementation',
  },
  {
    image: '/images/rebrand/studio-table-desktop.webp',
    group: 'Enable',
    title: 'Set a company standard',
    detail: 'Receive approved tools, access rules, staff training, service guidance and adoption reporting.',
    services: 'Standards and team capability',
    href: '/services/enterprise-ai',
  },
];

const team = [
  {
    initials: 'LB',
    name: 'Luc Balonwu',
    role: 'Lead consultant',
    body: 'Leads client engagements, commercial decisions and delivery quality.',
  },
  {
    initials: 'RC',
    name: 'Rohan Campion',
    role: 'Lead consultant',
    body: 'Leads service design, engineering decisions and technical delivery.',
  },
  {
    initials: 'AB',
    name: 'Alice Brasher',
    role: 'Senior consultant',
    body: 'Supports consulting assignments, client research and delivery materials.',
  },
  {
    initials: 'QG',
    name: 'Specialist network',
    role: null,
    body: 'Provides relevant technical or sector expertise for defined assignments.',
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="about-top" aria-labelledby="about-title">
        <div className={styles.heroContent}>
          <div className={styles.brandLine}>
            <Image src="/brand/quiet-gears-logo.jpg" alt="" width={46} height={46} priority />
            <p>Senior-led · London · working UK-wide</p>
          </div>
          <h1 id="about-title">Quiet Gears<br />Consulting</h1>
          <h2>Senior AI advice. Production software.</h2>
          <p className={styles.heroCopy}>
            Quiet Gears gives UK SME leadership teams a clear investment decision, a defined software deliverable and a service their staff can use.
          </p>
          <p className={styles.heroNote}>Independent advice. Senior consultants. Complete client handover.</p>
          <div className={styles.heroActions}>
            <Link className={`${styles.button} ${styles.buttonSignal}`} href="/contact">
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className={`${styles.button} ${styles.buttonOutline}`} href="/services">
              Explore our services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className={styles.glanceCard} aria-label="Quiet Gears at a glance">
          <p>Quiet Gears at a glance</p>
          {atAGlance.map(([value, label]) => (
            <div className={styles.glanceItem} key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className={styles.impactStrip} aria-label="Quiet Gears capabilities">
        <div><strong>Clarity</strong><span>Approved investment brief</span></div>
        <div><strong>Capacity</strong><span>Less repeated administration</span></div>
        <div><strong>Service</strong><span>Faster staff and customer response</span></div>
        <div><strong>Control</strong><span>Clear authority and records</span></div>
      </section>

      <section className={`${styles.section} ${styles.reasonsSection}`} aria-labelledby="reasons-title">
        <div className={`${styles.sectionHeading} ${styles.centeredHeading}`}>
          <p className={styles.sectionLabel}>Quiet Gears standard</p>
          <h2 id="reasons-title">Six commitments on every engagement.</h2>
          <p>Clear responsibility, defined assets and a complete record of delivery.</p>
        </div>
        <div className={styles.reasonsGrid}>
          {reasons.map(({ Icon, title, body }) => (
            <article className={styles.reasonCard} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.teamSection} aria-label="People">
        <div className={`${styles.sectionHeading} ${styles.teamHeading}`}>
          <p className={styles.sectionLabel}>People</p>
        </div>
        <div className={styles.teamGrid}>
          {team.map((person) => (
            <article className={styles.teamCard} key={person.name}>
              <div className={styles.initials}><span>{person.initials}</span></div>
              <div className={styles.teamCopy}>
                {person.role && <small>{person.role}</small>}
                <h3>{person.name}</h3>
                <p>{person.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.expansionSection} aria-labelledby="expansion-title">
        <div className={`${styles.sectionHeading} ${styles.expansionHeading}`}>
          <p className={styles.sectionLabel}>Service expansion</p>
          <h2 id="expansion-title">A defined deliverable<br />at every investment level.</h2>
          <p>
            Each engagement is contracted around visible outputs, acceptance criteria and a defined business result. Additional scope requires evidence from operational use.
          </p>
        </div>
        <div className={styles.expansionTable} role="table" aria-label="Quiet Gears engagement stages">
          <div className={styles.expansionHead} role="row">
            <span role="columnheader">Package</span>
            <span role="columnheader">Business result</span>
            <span role="columnheader">Included outputs</span>
          </div>
          {expansion.map(([stage, decision, detail]) => (
            <div className={styles.expansionRow} role="row" key={stage}>
              <span role="cell">{stage}</span>
              <strong role="cell">{decision}</strong>
              <span role="cell">{detail}</span>
            </div>
          ))}
        </div>
        <div className={styles.expansionCallout}>
          <CircleCheck aria-hidden="true" />
          <p>The client receives the agreed software, documentation, service records and training materials.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.pathwaysSection}`} aria-labelledby="pathways-title">
        <div className={`${styles.sectionHeading} ${styles.splitHeading}`}>
          <div>
            <p className={styles.sectionLabel}>Ways we work</p>
            <h2 id="pathways-title">Three commercial<br />engagement paths.</h2>
          </div>
          <p className={styles.sectionIntro}>
            Commission a decision brief, a production service or a company enablement package. Each path has a separate specification and deliverables.
          </p>
        </div>
        <div className={styles.pathwayGrid}>
          {pathways.map((pathway) => (
            <Link className={styles.pathwayCard} href={pathway.href} key={pathway.group}>
              <div className={styles.pathwayImage}>
                <Image src={pathway.image} alt="" fill sizes="(min-width: 981px) 33vw, 100vw" />
                <span>{pathway.group}</span>
                <div><small>{pathway.services}</small><h3>{pathway.title}</h3></div>
              </div>
              <div className={styles.pathwayBody}>
                <p>{pathway.detail}</p>
                <ArrowRight size={22} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.contactSection} contact-band`} aria-labelledby="contact-title">
        <div>
          <p className={styles.sectionLabel}>Start with the problem</p>
          <h2 id="contact-title">Bring us the business problem.</h2>
          <div className={styles.contactIntro}>The first meeting produces a concise view of fit, expected deliverable and likely engagement size.</div>
          <Link className={`${styles.button} ${styles.buttonSignal}`} href="/contact">
            Start a conversation <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <aside className={styles.contactPanel} aria-label="Quiet Gears contact details">
          <div><span>Email</span><a href="mailto:enquiries@quietgears.xyz"><Mail size={18} /> enquiries@quietgears.xyz</a></div>
          <div><span>Base</span><strong><MapPin size={18} /> London</strong></div>
          <div><span>Coverage</span><strong><Network size={18} /> Working UK-wide</strong></div>
          <div><span>Working model</span><strong><Handshake size={18} /> Senior-led</strong></div>
        </aside>
      </section>
    </div>
  );
}
