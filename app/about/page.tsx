import Image from 'next/image';
import type { Metadata } from 'next';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'About Us | Almazora Motors Corporation',
  description: 'Over a century of vehicle body building excellence. Learn about the history, vision, and mission of Almazora Motors Corporation.',
};

const stats = [
  { value: '125+', label: 'Years Vehicle Body Building' },
  { value: '56+', label: 'Years Bus Body Building' },
  { value: '28+', label: 'Years AUV Body Building' },
  { value: '40,000+', label: 'Units AUV Body Built' },
];

const visionPoints = [
  'Attain operational excellence',
  'Expand market coverage',
  'Improve team engagement',
  'Establish sustainability for the next 100 years',
];

const missionPillars = [
  {
    title: 'Quality',
    desc: 'Ensure that all products adhere to industry standards.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
  {
    title: 'Customer',
    desc: 'Provide products and services that meet customer requirements.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: 'Innovation',
    desc: 'Pursue new designs and technologies that push the industry forward.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  },
  {
    title: 'Sustainability',
    desc: 'Responsible for the future by being an eco-friendly company.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  },
];

const timeline = [
  {
    year: '1920',
    title: 'The Beginning',
    desc: 'Establishment of Carroceria de Almazora and production of the first Karetela.',
    images: ['/assets/HISTORY/1920%20Kalesa.png'],
  },
  {
    year: '1945',
    title: 'Post-War Era',
    desc: 'Started the production of the Jardinera Bus, rebuilding the transport sector after the war.',
    images: ['/assets/HISTORY/1945%20JARDINERA%20BUS.png'],
  },
  {
    year: '1970–1989',
    title: 'Growth & Partnerships',
    desc: 'Establishment of Almazora Truck Body Builder and partnership with Mitsubishi, Hino, and Isuzu.',
    images: [
      '/assets/HISTORY/1970-1989%20VICTORY%20LINER%20BUS%20v2.png',
      '/assets/HISTORY/1970-1989%20BUS.png',
      '/assets/HISTORY/1970-1989%20TIMES%20TRANSIT%20BUS.png',
    ],
  },
  {
    year: '1990',
    title: 'Almazora Motors Corporation',
    desc: 'Establishment of Almazora Motors Corp. and partnership with Mitsubishi PAMCOR.',
    images: [
      '/assets/HISTORY/1990%20MITSUBISHI%20PRINCESS%20BUS.png',
      '/assets/HISTORY/1990%20MITSUBISHI%20BLTB%20CO%20BUS.png',
    ],
  },
  {
    year: '1994–1995',
    title: 'L300 Expansion',
    desc: 'Awarding of L300 FB contract and expansion of Plant 2 production.',
    images: ['/assets/HISTORY/1995%20L300%20PLANT.jpg'],
  },
  {
    year: '2008',
    title: 'SPV Plant Established',
    desc: 'Establishment of the Special Purpose Vehicle Plant, expanding into fire trucks, ambulances, and custom-built vehicles.',
    images: [
      '/assets/HISTORY/2008%20AMC%20SPV1.jpg',
      '/assets/HISTORY/2008%20SPV%20FIRETRUCK.jpg',
    ],
  },
  {
    year: '2011',
    title: '2nd Stamping Plant',
    desc: 'Establishment of the 2nd Stamping Plant, adding 400T, 500T, 700T, and 800T press capacity.',
    images: [
      '/assets/HISTORY/2011%20SPV2%20STAMPING%20PLANT1.png',
      '/assets/HISTORY/2011%20SPV2%20400T%20Press.png',
    ],
  },
  {
    year: '2017',
    title: 'Modernized PUV Program',
    desc: 'Launching of the Modernized Public Utility Vehicle program in partnership with Isuzu and Fuso.',
    images: [
      '/assets/HISTORY/2017%20isuzu%20puv%20class%202.png',
      '/assets/HISTORY/2017%20fuso%20puv%20class%202.png',
    ],
  },
  {
    year: '2018–2019',
    title: 'Heavy Vehicle Expansion',
    desc: 'Awarding of L300 and L300 SPV Plant 2, expanding into heavy-duty special purpose vehicles.',
    images: ['/assets/HISTORY/2018%20SCOOP%20END%20DUMPTRUCK.jpg'],
  },
  {
    year: '2020',
    title: 'Traviz Plant',
    desc: 'Launch of the Traviz Plant and production line, introducing modern utility vehicle manufacturing.',
    images: ['/assets/HISTORY/2020%20TRAVIZ%20PLANT.jpg'],
  },
  {
    year: '2024',
    title: 'New Expansion Plant',
    desc: 'Groundbreaking of the new expansion plant, increasing production capacity to meet growing demand.',
    images: [],
  },
  {
    year: '2025',
    title: 'EV & Toyota Special Project',
    desc: "Launch of electric vehicle initiatives and the Toyota Special Project, marking AMC's entry into next-generation vehicle manufacturing.",
    images: [],
  },
];

const clients = [
  { src: '/assets/CLIENTS/coca-cola.png', name: 'Coca-Cola' },
  { src: '/assets/CLIENTS/san-miguel.png', name: 'San Miguel' },
  { src: '/assets/CLIENTS/jm.png', name: 'JM' },
  { src: '/assets/CLIENTS/jt-express.png', name: 'J&T Express' },
  { src: '/assets/CLIENTS/zest-air.png', name: 'Zest Air' },
  { src: '/assets/CLIENTS/kia.png', name: 'KIA' },
  { src: '/assets/CLIENTS/isuzu.png', name: 'Isuzu' },
  { src: '/assets/CLIENTS/mitsubishi.png', name: 'Mitsubishi' },
  { src: '/assets/CLIENTS/fuso.png', name: 'Fuso' },
];

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ① Hero */}
      <section className="vp-hero">
        <div className="container">
          <h1 className="vp-hero__title">About Us</h1>
          <p className="vp-hero__subtitle">Over a century of vehicle body building excellence in the Philippines.</p>
        </div>
        <div className="vp-hero__slant" />
      </section>

      {/* ③ Company Intro */}
      <section className="au-intro section">
        <div className="container">
          <div className="au-intro__layout">
            <div className="au-intro__text reveal-left">
              <span className="au-eyebrow">Knowledge & Experience</span>
              <h2 className="au-intro__heading">A Century of Excellence in Vehicle Manufacturing</h2>
              <p className="au-intro__desc">
                Almazora Motors Corporation is one of the Philippines' most trusted vehicle body builders,
                with roots stretching back to 1920. From hand-built kalesas to modern public utility
                vehicles, our century-long legacy is built on craftsmanship, partnerships, and a
                relentless drive to serve the nation's transportation needs.
              </p>
              <p className="au-intro__desc">
                Today, AMC operates multiple manufacturing plants producing buses, special purpose
                vehicles, and utility vehicles for clients across government, private industry, and
                transport operators nationwide.
              </p>
            </div>
            <div className="au-intro__image reveal-right">
              <div className="au-mosaic">
                <div className="au-mosaic__item au-mosaic__item--a">
                  <Image src="/assets/HISTORY/1970-1989%20VICTORY%20LINER%20BUS%20v2.png" alt="Victory Liner Bus 1970s" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <div className="au-mosaic__item au-mosaic__item--b">
                  <Image src="/assets/HISTORY/1920%20Kalesa.png" alt="1920 Kalesa" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <div className="au-mosaic__item au-mosaic__item--c">
                  <Image src="/assets/HISTORY/1945%20JARDINERA%20BUS.png" alt="1945 Jardinera Bus" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <div className="au-mosaic__item au-mosaic__item--d">
                  <Image src="/assets/HISTORY/2017%20isuzu%20puv%20class%202.png" alt="2017 Isuzu PUV" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② Stats Bar */}
      <section className="au-stats">
        <div className="container">
          <div className="au-stats__grid">
            {stats.map((s, i) => (
              <div key={i} className="au-stat reveal">
                <CountUp value={s.value} className="au-stat__value" />
                <span className="au-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Vision */}
      <section className="au-vision section">
        <div className="container">
          <div className="au-vision__layout">
            <div className="au-vision__image reveal-left">
              <Image
                src="/assets/HISTORY/2017%20isuzu%20puv%20class%203.png"
                alt="Our Vision"
                width={520}
                height={380}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                unoptimized
              />
            </div>
            <div className="au-vision__content reveal-right">
              <span className="au-eyebrow">Our Direction</span>
              <h2 className="au-vision__heading">Vision</h2>
              <blockquote className="au-vision__quote">
                "ALMAZORA: To construct a stronger, sustainable automotive solution through lean and innovative practices."
              </blockquote>
              <ul className="au-vision__points">
                {visionPoints.map((pt, i) => (
                  <li key={i} className="au-vision__point">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, color: 'var(--color-secondary)' }}><polyline points="20 6 9 17 4 12"/></svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ Mission */}
      <section className="au-mission">
        <div className="vp-hero__slant au-mission__slant-top" />
        <div className="container">
          <span className="au-eyebrow au-eyebrow--light">Our Purpose</span>
          <h2 className="au-mission__heading">Mission</h2>
          <blockquote className="au-mission__quote">
            "ALMAZORA: We are committed to providing customer satisfaction by manufacturing high-quality vehicles through continuous improvement and sustainable practices."
          </blockquote>
          <div className="au-mission__pillars">
            {missionPillars.map((p, i) => (
              <div key={i} className="au-pillar reveal">
                <div className="au-pillar__icon">{p.icon}</div>
                <h3 className="au-pillar__title">{p.title}</h3>
                <p className="au-pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ History Timeline */}
      <section className="au-history section">
        <div className="container">
          <span className="au-eyebrow">Our Story</span>
          <h2 className="au-history__heading">History</h2>
          <div className="au-timeline">
            <div className="au-timeline__line" />

            {/* Left column — even items */}
            <div className="au-timeline__col au-timeline__col--left">
              {timeline.filter((_, i) => i % 2 === 0).map((item, i) => (
                <div key={i} className="au-milestone au-milestone--left reveal">
                  <span className="au-milestone__year">{item.year}</span>
                  {item.images.length > 0 && (
                    <div className={`au-milestone__images au-milestone__images--${Math.min(item.images.length, 3)}`}>
                      {item.images.slice(0, 3).map((src, j) => (
                        <div key={j} className="au-milestone__img-wrap">
                          <Image src={src} alt={`${item.title} ${j + 1}`} width={280} height={185} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="au-milestone__title">{item.title}</h3>
                  <p className="au-milestone__desc">{item.desc}</p>
                  <div className="au-milestone__dot" />
                </div>
              ))}
            </div>

            {/* Right column — odd items, offset for stagger */}
            <div className="au-timeline__col au-timeline__col--right">
              {timeline.filter((_, i) => i % 2 !== 0).map((item, i) => (
                <div key={i} className="au-milestone au-milestone--right reveal">
                  <div className="au-milestone__dot" />
                  <span className="au-milestone__year">{item.year}</span>
                  {item.images.length > 0 && (
                    <div className={`au-milestone__images au-milestone__images--${Math.min(item.images.length, 3)}`}>
                      {item.images.slice(0, 3).map((src, j) => (
                        <div key={j} className="au-milestone__img-wrap">
                          <Image src={src} alt={`${item.title} ${j + 1}`} width={280} height={185} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="au-milestone__title">{item.title}</h3>
                  <p className="au-milestone__desc">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ⑦ Clients */}
      <section className="au-clients">
        <div className="vp-hero__slant au-clients__slant-top" />
        <div className="container">
          <span className="au-eyebrow au-eyebrow--light">Who We Serve</span>
          <h2 className="au-clients__heading">Our Clients</h2>
          <div className="au-clients__grid">
            {clients.map((c, i) => (
              <div key={i} className="au-client reveal">
                <Image src={c.src} alt={c.name} width={140} height={70} style={{ width: '100%', height: '100%', objectFit: 'contain' }} unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
