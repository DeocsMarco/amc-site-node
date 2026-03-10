'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Dark logo sits at low z-index — hidden behind blue section, revealed on white
export function DarkLogo() {
  return (
    <div className="logo-dark-fixed">
      <Link href="/">
        <Image
          src="/assets/LOGOS/amc-logo-desktop.png"
          alt="Almazora Motors Corporation"
          width={160}
          height={40}
          className="logo__img"
          priority
          unoptimized
        />
      </Link>
    </div>
  );
}

// White logo: always visible on dark sections, fades out once header scrolled state kicks in
export function WhiteLogo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`logo-white-fixed ${scrolled ? 'is-scrolled' : ''}`}>
      <Link href="/">
        <Image
          src="/assets/LOGOS/amc-logo-desktop.png"
          alt="Almazora Motors Corporation"
          width={160}
          height={40}
          className="logo__img"
          style={{ filter: 'brightness(0) invert(1)' }}
          priority
          unoptimized
        />
      </Link>
    </div>
  );
}
