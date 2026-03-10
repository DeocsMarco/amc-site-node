'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const els = document.querySelectorAll<HTMLElement>(selectors);

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
  }, []);

  return null;
}
