import type { ReactNode } from 'react';
import { ResponsiveBackground } from './ResponsiveBackground';
import styles from './FullBleedHero.module.css';

type FullBleedHeroProps = {
  desktopSrc: string;
  mobileSrc: string;
  eyebrow?: string;
  title: ReactNode;
  summary?: string;
  children?: ReactNode;
  className?: string;
  focalPosition?: string;
  eager?: boolean;
};

export function FullBleedHero({
  desktopSrc,
  mobileSrc,
  eyebrow,
  title,
  summary,
  children,
  className = '',
  focalPosition,
  eager = false,
}: FullBleedHeroProps) {
  return (
    <section className={`${styles.hero} ${className}`.trim()}>
      <ResponsiveBackground
        className={styles.media}
        desktopSrc={desktopSrc}
        mobileSrc={mobileSrc}
        eager={eager}
        objectPosition={focalPosition}
      />
      <div className={styles.shade} />
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {summary && <p>{summary}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
