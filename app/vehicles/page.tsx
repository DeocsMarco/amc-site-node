import VehicleFilter from '@/components/VehicleFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicles | Buses, Special Purpose Vehicles & Utility Vehicles',
  description: 'Browse Almazora Motors Corporation\'s full vehicle lineup — buses, Light and Heavy Special Purpose Vehicles, Public Utility Vehicles, and Utility Vehicles. Custom-built for government, transport operators, and private clients in the Philippines.',
  openGraph: {
    title: 'Vehicles | Almazora Motors Corporation',
    description: 'Buses, Special Purpose Vehicles, Public Utility Vehicles, and Utility Vehicles — custom-built in the Philippines.',
    url: 'https://www.almazoramotors.com/vehicles',
    images: [{ url: '/assets/BUS/bus-kv.png', width: 1200, height: 630, alt: 'Almazora Motors — Bus Lineup' }],
  },
};

export default function VehiclesPage() {
  return (
    <div className="vehicles-page">
      {/* Navy hero */}
      <section className="vp-hero">
        <div className="container">
          <h1 className="vp-hero__title">Our Vehicles</h1>
          <p className="vp-hero__subtitle">Discover our comprehensive range of quality-built vehicles for every transportation need.</p>
        </div>
        {/* Diagonal white slant at bottom */}
        <div className="vp-hero__slant" />
      </section>

      {/* Filterable product grid */}
      <VehicleFilter />
    </div>
  );
}
