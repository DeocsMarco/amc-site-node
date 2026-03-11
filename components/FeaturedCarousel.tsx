'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/assets/BUS/bus-kv.png',
    name: 'Fullbody Bus',
    desc: 'Premium quality bus body built for long-distance travel with superior comfort, durability, and safety features.',
  },
  {
    image: '/assets/SPV/CLASS 2 PUV bg.png',
    name: 'Public Utility Vehicle',
    desc: 'Modern Public Utility Vehicle (PUV) designed for efficient public transportation with improved passenger capacity and comfort.',
  },
  {
    image: '/assets/SPV light/AMBULANCE.png',
    name: 'Light Special Purpose Vehicle',
    desc: 'Versatile light special vehicles customized for medical, commercial, and special purpose applications.',
  },
  {
    image: '/assets/SPV/FIRE TRUCK SPV  bg.png',
    name: 'Medium Special Purpose Vehicle',
    desc: 'Robust medium-duty special vehicles engineered for emergency services, logistics, and industrial operations.',
  },
  {
    image: '/assets/SPV heavy/DUMP TRUCK bg.png',
    name: 'Heavy Special Purpose Vehicle',
    desc: 'Heavy-duty special vehicles built for demanding construction, mining, and hauling applications.',
  },
];

export default function FeaturedCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive(i => (i - 1 + slides.length) % slides.length);
  const next = () => setActive(i => (i + 1) % slides.length);

  return (
    <section className="featured section">
      <div className="container">
        <h2 className="section__title">Featured Products</h2>
        <div className="featured__carousel">
          <div className="featured__slides">
            {slides.map((slide, i) => (
              <div key={i} className={`featured__slide ${i === active ? 'featured__slide--active' : ''}`}>
                <div className="featured__image">
                  <Image src={slide.image} alt={slide.name} fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <div className="featured__info">
                  <h3 className="featured__name">{slide.name}</h3>
                  <p className="featured__desc">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="featured__controls">
            <button className="featured__btn featured__btn--prev" aria-label="Previous" onClick={prev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="featured__dots">
              {slides.map((_, i) => (
                <span key={i} className={`featured__dot ${i === active ? 'featured__dot--active' : ''}`} onClick={() => setActive(i)} />
              ))}
            </div>
            <button className="featured__btn featured__btn--next" aria-label="Next" onClick={next}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

