'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, type CSSProperties } from 'react';
import { ResponsiveBackground } from '@/components/ResponsiveBackground';
import styles from './scroll-scrub-hero.module.css';

export type ScrollScrubFrame = {
  desktopSrc: string;
  mobileSrc: string;
  alt?: string;
  focalPosition?: string;
};

export type ScrollScrubAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'text';
};

export type ScrollScrubHeroProps = {
  frames: ScrollScrubFrame[];
  title: string;
  tagline: string;
  actions: ScrollScrubAction[];
  scrubScreens?: number;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function ScrollScrubHero({
  frames,
  title,
  tagline,
  actions,
  scrubScreens = 3,
}: ScrollScrubHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || frames.length === 0) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const render = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = reducedMotion.matches ? 1 : clamp(-rect.top / distance);
      const position = progress * Math.max(1, frames.length - 1);

      frameRefs.current.forEach((frame, index) => {
        if (!frame) return;
        const opacity = frames.length === 1 ? 1 : clamp(1 - Math.abs(position - index));
        frame.style.opacity = String(opacity);
        frame.style.transform = `scale(${1.04 - opacity * .025 + progress * .025})`;
      });
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const queueRender = () => {
      if (!raf) raf = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', queueRender, { passive: true });
    window.addEventListener('resize', queueRender);
    reducedMotion.addEventListener('change', queueRender);
    return () => {
      window.removeEventListener('scroll', queueRender);
      window.removeEventListener('resize', queueRender);
      reducedMotion.removeEventListener('change', queueRender);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [frames]);

  return (
    <section
      ref={sectionRef}
      className={styles.scrub}
      style={{ '--scrub-screens': scrubScreens } as CSSProperties}
      aria-labelledby="home-title"
    >
      <div className={styles.stage}>
        <div className={styles.frames} aria-hidden="true">
          {frames.map((frame, index) => (
            <div
              className={styles.frame}
              ref={(node) => { frameRefs.current[index] = node; }}
              key={frame.desktopSrc}
            >
              <ResponsiveBackground
                className={styles.media}
                desktopSrc={frame.desktopSrc}
                mobileSrc={frame.mobileSrc}
                objectPosition={frame.focalPosition}
                eager={index === 0}
              />
            </div>
          ))}
        </div>
        <div className={styles.shade} />
        <div className={styles.content}>
          <h1 id="home-title">{title}</h1>
          <p>{tagline}</p>
          <div className={styles.actions}>
            {actions.map((action) => action.variant === 'text'
              ? <Link className={styles.secondaryAction} href={action.href} key={action.href}>{action.label} <ArrowUpRight size={16} /></Link>
              : <Link className={styles.primaryAction} href={action.href} key={action.href}>{action.label} <ArrowRight size={17} /></Link>)}
          </div>
        </div>
        <div className={styles.progress} aria-hidden="true"><div ref={progressRef} /></div>
      </div>
    </section>
  );
}
