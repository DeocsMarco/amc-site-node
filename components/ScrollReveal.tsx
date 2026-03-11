'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay so the new page's DOM is fully painted before querying
    const timer = setTimeout(() => {
      const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
      const els = document.querySelectorAll<HTMLElement>(selectors);

      // Reset visibility so elements animate in fresh on each page visit
      els.forEach((el) => {
        el.classList.remove('reveal--visible', 'reveal-left--visible', 'reveal-right--visible', 'reveal-scale--visible');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              if (el.classList.contains('reveal')) el.classList.add('reveal--visible');
              if (el.classList.contains('reveal-left')) el.classList.add('reveal-left--visible');
              if (el.classList.contains('reveal-right')) el.classList.add('reveal-right--visible');
              if (el.classList.contains('reveal-scale')) el.classList.add('reveal-scale--visible');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // re-run on every route change

  return null;
}
