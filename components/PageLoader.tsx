'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('is-loading');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('is-loading');
      setHidden(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`page-loader`}>
      <Image src="/assets/LOGOS/amc-logo-desktop.png" alt="Almazora Motors" width={180} height={60} className="page-loader__logo" />
      <div className="page-loader__spinner" />
    </div>
  );
}
