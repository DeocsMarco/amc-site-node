import VehicleFilter from '@/components/VehicleFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicles | Almazora Motors Corporation',
  description: 'Explore our comprehensive range of quality-built vehicles for every transportation need.',
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
