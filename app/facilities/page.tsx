import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Almazora Motors Corporation',
  description: 'State-of-the-art manufacturing facilities equipped with the latest technology.',
};

const plants = [
  {
    id: 'bus',
    number: '01',
    title: 'BUS',
    desc: 'Our dedicated bus manufacturing facility featuring full-length assembly lines, body fabrication workshops, and climate-controlled paint booths for high-volume bus production.',
    features: ['Full-length assembly lines', 'Body fabrication workshop', 'Paint booths', 'In-house quality inspection'],
    hero: '/assets/PLANT/AMC BUS.png',
    gallery: [],
  },
  {
    id: 'spv1',
    number: '02',
    title: 'SPECIAL PURPOSE VEHICLE PLANT 1',
    desc: 'A view of the Special Purpose Vehicle manufacturing area, showcasing our production floor equipped for custom vehicle assembly and specialized fabrication work.',
    features: ['Custom SPV assembly', 'Fabrication workshop', 'Specialized tooling', 'Quality inspection'],
    hero: '/assets/PLANT/AMC SPV1.jpg',
    gallery: [],
  },
  {
    id: 'spv2',
    number: '03',
    title: 'SPECIAL PURPOSE VEHICLE PLANT 2',
    desc: 'The second section of our SPV plant, featuring dedicated stations for body fitting, component installation, and structural assembly of special purpose units.',
    features: ['Body fitting stations', 'Component installation', 'Structural assembly', 'In-process checks'],
    hero: '/assets/PLANT/AMC SPV2.jpg',
    gallery: [],
  },
  {
    id: 'spv3',
    number: '04',
    title: 'SPECIAL PURPOSE VEHICLE PLANT 3',
    desc: 'Our SPV staging and dispatch area where completed units undergo final inspection, documentation, and preparation for delivery to clients nationwide.',
    features: ['Final inspection area', 'Unit staging & dispatch', 'Documentation processing', 'Client handover prep'],
    hero: '/assets/PLANT/AMC SPV3.jpg',
    gallery: [],
  },
  {
    id: 'spv4',
    number: '05',
    title: 'SPECIAL PURPOSE VEHICLE PLANT 4',
    desc: 'Overhead view of the SPV production compound, highlighting the scale of our operations and the organized flow of vehicles through the manufacturing process.',
    features: ['Wide-span production bay', 'Organized vehicle flow', 'Multi-unit capacity', 'Efficient logistics'],
    hero: '/assets/PLANT/AMC SPV4.jpg',
    gallery: [],
  },
  {
    id: 'spv5',
    number: '06',
    title: 'SPECIAL PURPOSE VEHICLE PLANT 5',
    desc: 'The completed vehicle lot of our SPV facility, where finished units are parked and prepared for client inspection, registration, and final delivery.',
    features: ['Finished vehicle holding', 'Client inspection zone', 'Registration support', 'Fleet dispatch area'],
    hero: '/assets/PLANT/AMC SPV5.jpg',
    gallery: [],
  },
  {
    id: 'auv1',
    number: '07',
    title: 'AUV1',
    desc: 'The main assembly area of our AUV plant, featuring dedicated production lines for utility vehicles and light commercial units with precision component fitting.',
    features: ['UV assembly lines', 'Precision component fitting', 'Lean production flow', 'High-throughput output'],
    hero: '/assets/PLANT/AMC AUV1.jpg',
    gallery: [],
  },
  {
    id: 'auv2',
    number: '08',
    title: 'AUV2',
    desc: 'Interior of the AUV production facility showing the organized workstations, tooling setups, and material handling systems that support continuous assembly operations.',
    features: ['Organized workstations', 'Material handling systems', 'Continuous assembly ops', 'In-line quality control'],
    hero: '/assets/PLANT/AMC AUV2.jpg',
    gallery: [],
  },
  {
    id: 'auv3',
    number: '09',
    title: 'AUV3',
    desc: 'The AUV plant staging area where assembled utility vehicles are prepared for testing, final finishing, and delivery. Capacity supports consistent monthly output.',
    features: ['Vehicle staging area', 'Final finishing zone', 'Output testing bays', 'Delivery preparation'],
    hero: '/assets/PLANT/AMC AUV3.jpg',
    gallery: [],
  },
];

const capabilities = [
  {
    title: 'Design & Engineering',
    desc: 'In-house design team with CAD/CAM capabilities for custom vehicle solutions.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
  {
    title: 'Metal Fabrication',
    desc: 'Full-service metal fabrication including cutting, bending, welding, and finishing.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    title: 'Assembly',
    desc: 'Efficient assembly lines with rigorous quality control at every stage of production.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    title: 'Quality Assurance',
    desc: 'ISO-certified quality management systems ensuring consistent excellence in every vehicle.',
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
];

export default function FacilitiesPage() {
  return (
    <div className="facilities-page">

      {/* Navy hero */}
      <section className="vp-hero">
        <div className="container">
          <h1 className="vp-hero__title">Our Facilities</h1>
          <p className="vp-hero__subtitle">State-of-the-art manufacturing facilities equipped with the latest technology.</p>
        </div>
        <div className="vp-hero__slant" />
      </section>

      {/* Plant sections */}
      {plants.map((plant, i) => (
        <section key={plant.id} className={`fp-plant ${i % 2 !== 0 ? 'fp-plant--alt' : ''}`}>
          <div className="container">

            {/* Header row — number + title with gold accent bar */}
            <div className="fp-plant__header">
              <span className="fp-plant__number">{plant.number}</span>
              <h2 className="fp-plant__title">{plant.title}</h2>
            </div>

            {/* Image + content row */}
            <div className={`fp-plant__row ${i % 2 !== 0 ? 'fp-plant__row--reverse' : ''}`}>
              <div className="fp-plant__image">
                <Image
                  src={plant.hero}
                  alt={plant.title}
                  width={600}
                  height={420}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                  unoptimized
                />
              </div>
              <div className="fp-plant__content">
                <p className="fp-plant__desc">{plant.desc}</p>
                <ul className="fp-plant__features">
                  {plant.features.map((feat, j) => (
                    <li key={j} className="fp-plant__feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, color: 'var(--color-secondary)' }}><polyline points="20 6 9 17 4 12"/></svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Gallery thumbnails beside content */}
                {plant.gallery.length > 0 && (
                  <div className="fp-plant__gallery">
                    {plant.gallery.map((src, j) => (
                      <div key={j} className="fp-plant__gallery-item">
                        <Image src={src} alt={`${plant.title} ${j + 2}`} width={160} height={110} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Capabilities */}
      <section className="fp-capabilities">
        <div className="vp-hero__slant fp-cap__slant-top" />
        <div className="container">
          <h2 className="fp-cap__title">Our Capabilities</h2>
          <div className="fp-cap__grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="fp-cap-card">
                <div className="fp-cap-card__icon">{cap.icon}</div>
                <h3 className="fp-cap-card__title">{cap.title}</h3>
                <p className="fp-cap-card__desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
