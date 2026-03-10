'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const logoWhite = !scrolled && !isHome; // white on inner pages when not scrolled

  const links = [
    { href: '/vehicles', label: 'VEHICLES' },
    { href: '/facilities', label: 'FACILITIES' },
    { href: '/about', label: 'ABOUT US' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href="/" className="logo">
          <Image
            src="/assets/LOGOS/amc-logo-desktop.png"
            alt="Almazora Motors Corporation"
            width={160}
            height={40}
            className="logo__img"
            style={logoWhite ? { filter: 'brightness(0) invert(1)' } : undefined}
            priority
          />
        </Link>
        <nav className="nav">
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav__list ${menuOpen ? 'is-open' : ''}`}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav__link ${pathname === href ? 'nav__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
