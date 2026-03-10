'use client';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string; // e.g. "125+", "40,000+"
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse: "40,000+" → { num: 40000, plus: true, suffix: '' }
    const match = value.match(/^([\d,]+)(\+?)(.*)$/);
    if (!match) { setDisplay(value); return; }

    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const hasPlus = match[2] === '+';
    const suffix = match[3].trim();

    const format = (n: number) =>
      n.toLocaleString() + (hasPlus ? '+' : '') + (suffix ? ' ' + suffix : '');

    setDisplay('0' + (hasPlus ? '+' : ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            const duration = 2000;
            const startTime = performance.now();

            function update(now: number) {
              const progress = Math.min((now - startTime) / duration, 1);
              const current = Math.floor(easeOutQuart(progress) * target);
              setDisplay(format(current));
              if (progress < 1) requestAnimationFrame(update);
              else setDisplay(format(target));
            }

            requestAnimationFrame(update);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
