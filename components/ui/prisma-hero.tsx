'use client';

import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, type CSSProperties } from 'react';
import { ResponsiveBackground } from '@/components/ResponsiveBackground';
import styles from './prisma-hero.module.css';

const EASE = [0.16, 1, 0.3, 1] as const;

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = '',
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, index) => {
        const isLast = index === words.length - 1;
        return (
          <motion.span
            key={`${word}-${index}`}
            initial={reduceMotion ? false : { y: 20, opacity: 0 }}
            animate={isInView || reduceMotion ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : '0.22em' }}
          >
            {word}
            {showAsterisk && isLast ? (
              <span aria-hidden="true" className="absolute -right-[0.3em] top-[0.04em] text-[0.25em]">
                *
              </span>
            ) : null}
          </motion.span>
        );
      })}
    </span>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = '',
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className })),
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map(({ word, className: wordClassName }, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={reduceMotion ? false : { y: 20, opacity: 0 }}
          animate={isInView || reduceMotion ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
          className={`inline-block ${wordClassName ?? ''}`}
          style={{ marginRight: index === words.length - 1 ? 0 : '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const PrismaHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const playVideo = () => {
      if (document.visibilityState === 'hidden') return;
      if (video.networkState === video.NETWORK_EMPTY) video.load();
      void video.play().catch(() => {
        // The responsive poster remains visible if autoplay is unavailable.
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') playVideo();
    };

    // A page restored from the back-forward cache does not remount React, so
    // its autoplaying media must be resumed from the pageshow event.
    playVideo();
    video.addEventListener('loadeddata', playVideo);
    window.addEventListener('pageshow', playVideo);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      window.removeEventListener('pageshow', playVideo);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [reduceMotion]);

  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.frame}>
        <ResponsiveBackground
          className={styles.poster}
          desktopSrc="/images/rebrand/hero-gears-desktop.webp"
          mobileSrc="/images/rebrand/hero-gears-mobile.webp"
          objectPosition="50% 53%"
          eager
        />

        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/rebrand/hero-gears-desktop.webp"
          className={styles.video}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <div className={styles.shade} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />

        <div className={styles.content}>
          <h1 id="home-title" aria-label="Quiet Gears: AI Consulting & Engineering" className={styles.title}>
            <WordsPullUp text="Quiet Gears" />
          </h1>

          <div className={styles.supportingCopy}>
            <motion.p
              initial={reduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.45, ease: EASE }}
            >
              AI Consulting &amp; Engineering for SMEs
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.62, ease: EASE }}
            >
              <Link className={styles.cta} href="/contact">
                Start a conversation
                <span aria-hidden="true">
                  <ArrowRight />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
