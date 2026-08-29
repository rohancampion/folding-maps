import { getImageProps } from 'next/image';

type ResponsiveBackgroundProps = {
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
  alt?: string;
  eager?: boolean;
  objectPosition?: string;
};

export function ResponsiveBackground({
  desktopSrc,
  mobileSrc,
  className,
  alt = '',
  eager = false,
  objectPosition = 'center',
}: ResponsiveBackgroundProps) {
  const common = {
    alt,
    sizes: '100vw',
    loading: eager ? ('eager' as const) : ('lazy' as const),
    fetchPriority: eager ? ('high' as const) : ('auto' as const),
  };
  const { props: { srcSet: desktop, ...desktopImage } } = getImageProps({
    ...common,
    width: 1920,
    height: 1080,
    src: desktopSrc,
  });
  const { props: { srcSet: mobile, ...rest } } = getImageProps({
    ...common,
    width: 900,
    height: 1125,
    src: mobileSrc,
  });

  return <>
    {eager && <>
      <link rel="preload" as="image" href={desktopImage.src} imageSrcSet={desktop} imageSizes="100vw" media="(min-width: 701px)" />
      <link rel="preload" as="image" href={rest.src} imageSrcSet={mobile} imageSizes="100vw" media="(max-width: 700px)" />
    </>}
    <picture className={className} aria-hidden={alt ? undefined : true}>
      <source media="(min-width: 701px)" srcSet={desktop} />
      <source media="(max-width: 700px)" srcSet={mobile} />
      <img {...rest} style={{ objectPosition }} />
    </picture>
  </>;
}
