import Image from 'next/image';
import FeaturedCarousel from '@/components/FeaturedCarousel';

const carouselVehicles = [
  { src: '/assets/BUS/12M AIRCON DELUXE BUS.png', alt: '12M Aircon Deluxe Bus' },
  { src: '/assets/SPV light/AMBULANCE.png', alt: 'Ambulance' },
  { src: '/assets/SPV/FIRE TRUCK SPV  bg.png', alt: 'Fire Truck SPV' },
  { src: '/assets/SPV/CLASS 2 PUV bg.png', alt: 'Class 2 PUV' },
  { src: '/assets/SPV heavy/DUMP TRUCK bg.png', alt: 'Dump Truck' },
  { src: '/assets/UV/TAMARAW UTILITY VEHICLE bg.png', alt: 'Tamaraw UV' },
];

const buses = [
  { src: '/assets/BUS/12M AIRCON DELUXE BUS.png', name: '12M Aircon Deluxe Bus' },
  { src: '/assets/BUS/12M AIRCON DELUXE BUS(1).png', name: '12M Aircon Deluxe Bus Variant 2' },
  { src: '/assets/BUS/12M LOW ENTRY AIRCON AIRPORT BUS.png', name: '12M Low Entry Aircon Airport Bus' },
  { src: '/assets/BUS/12M LOW ENTRY AIRCON CITY BUS.png', name: '12M Low Entry Aircon City Bus' },
  { src: '/assets/BUS/12M SPECIAL PURPOSE BUS.png', name: '12M Special Purpose Bus' },
  { src: '/assets/BUS/12M SPECIAL PURPOSE BUS(1).png', name: '12M Special Purpose Bus Variant 2' },
  { src: '/assets/BUS/11M FRONT ENGINE FRONT DOOR AIRCON BUS.png', name: '11M Front Engine Front Door Aircon Bus' },
  { src: '/assets/BUS/11M FRONT ENGINE NON AIRCON BUS.png', name: '11M Front Engine Non Aircon Bus' },
  { src: '/assets/BUS/10M FRONT ENGINE CENTER DOOR AIRCON BUS.png', name: '10M Front Engine Center Door Aircon Bus' },
  { src: '/assets/BUS/9M FRONT ENGINE CENTER DOOR LOW ENTRY AIRCON BUS.png', name: '9M Front Engine Center Door Low Entry Aircon Bus' },
  { src: '/assets/BUS/8.5M AIRCON MINI BUS.png', name: '8.5M Aircon Mini Bus' },
  { src: '/assets/BUS/7M AIRCON MINI BUS.png', name: '7M Aircon Mini Bus' },
  { src: '/assets/BUS/FRONT ENGINE CENTER DOOR BUS.png', name: 'Front Engine Center Door Bus' },
  { src: '/assets/BUS/BGC BUS.png', name: 'BGC Bus' },
];

const uvs = [
  { src: '/assets/UV/TAMARAW UTILITY VEHICLE bg.png', name: 'Tamaraw Utility Vehicle' },
  { src: '/assets/UV/TAMARAW PATROL CARRIER bg.png', name: 'Tamaraw Patrol Carrier' },
  { src: '/assets/UV/TRAVIS UV bg.png', name: 'Travis UV' },
  { src: '/assets/UV/KIA UV bg.png', name: 'Kia UV' },
  { src: '/assets/UV/L300.png', name: 'L300' },
];

const lightSpv = [
  { src: '/assets/SPV light/AMBULANCE.png', name: 'Ambulance' },
  { src: '/assets/SPV light/RESCUE AMBULANCE PICK UP TYPE.png', name: 'Rescue Ambulance Pick Up Type' },
  { src: '/assets/SPV light/ASHOK LEYLAND PHOENIX FIRE TRUCK.png', name: 'Ashok Leyland Phoenix Fire Truck' },
  { src: '/assets/SPV light/ALUMINUM VAN 10X6X6 AND OTHERS.png', name: 'Aluminum Van 10x6x6 and Others' },
  { src: '/assets/SPV light/CUSTOM ALUMINUM VAN bg.png', name: 'Custom Aluminum Van' },
  { src: '/assets/SPV light/10FT PASSENGER BODY.png', name: '10ft Passenger Body' },
  { src: '/assets/SPV light/L200 PASSENGER TYPE.png', name: 'L200 Passenger Type' },
  { src: '/assets/SPV light/BROADCAST VAN bg.png', name: 'Broadcast Van' },
  { src: '/assets/SPV light/COOLING VAN bg.png', name: 'Cooling Van' },
  { src: '/assets/SPV light/REF VAN bg.png', name: 'Ref Van' },
  { src: '/assets/SPV light/MOBILE ATM bg.png', name: 'Mobile ATM' },
  { src: '/assets/SPV light/MOBILE BEER TRUCK bg.png', name: 'Mobile Beer Truck' },
  { src: '/assets/SPV light/MOBILE EV KITCHEN bg.png', name: 'Mobile EV Kitchen' },
  { src: '/assets/SPV light/MOBILE FOOD STORE bg.png', name: 'Mobile Food Store' },
  { src: '/assets/SPV light/MOBILE STORE bg.png', name: 'Mobile Store' },
  { src: '/assets/SPV light/MOBILE SCHOOL SERVICE bg.png', name: 'Mobile School Service' },
  { src: '/assets/SPV light/MOBILE TECHNICAL VAN bg.png', name: 'Mobile Technical Van' },
  { src: '/assets/SPV light/MOBILE RESCUE.png', name: 'Mobile Rescue' },
  { src: '/assets/SPV light/DROPSIDE bg.png', name: 'Dropside' },
  { src: '/assets/SPV light/ISUZU DROPSIDE WITH CANOPY.png', name: 'Isuzu Dropside with Canopy' },
  { src: '/assets/SPV light/L300 DELIVERY VAN bg.png', name: 'L300 Delivery Van' },
  { src: '/assets/SPV light/MICRO VAN bg.png', name: 'Micro Van' },
  { src: '/assets/SPV light/WALK THROUGH VAN bg.png', name: 'Walk Through Van' },
  { src: '/assets/SPV light/BEVERAGE TRUCK.png', name: 'Beverage Truck' },
  { src: '/assets/SPV light/DIGGER DERRICK bg.png', name: 'Digger Derrick' },
  { src: '/assets/SPV light/LINEMANS VEHICLE bg.png', name: "Lineman's Vehicle" },
  { src: '/assets/SPV light/ISUZU DMAX LINEMAN_S VEHICLE.png', name: "Isuzu D-Max Lineman's Vehicle" },
  { src: '/assets/SPV light/TRAILER bg.png', name: 'Trailer' },
  { src: '/assets/SPV light/PRISONERS VAN bg.png', name: 'Prisoners Van' },
  { src: '/assets/SPV light/PET GROOMING VAN.png', name: 'Pet Grooming Van' },
  { src: '/assets/SPV light/POPE MOBILE.png', name: 'Pope Mobile' },
  { src: '/assets/SPV light/TRAVIZ PUV CLASS 1.png', name: 'Traviz PUV Class 1' },
  { src: '/assets/SPV light/MITSUBISHI CLASS 1.png', name: 'Mitsubishi Class 1' },
  { src: '/assets/SPV light/TROOP CARRIER LIGHT.png', name: 'Troop Carrier Light' },
  { src: '/assets/SPV light/TROOP CARRIER LIGHT v2 bg.png', name: 'Troop Carrier Light V2' },
];

const mediumSpv = [
  { src: '/assets/SPV/CLASS 2 PUV bg.png', name: 'Class 2 PUV' },
  { src: '/assets/SPV/CLASS 3 PUV bg.png', name: 'Class 3 PUV' },
  { src: '/assets/SPV/FIRE TRUCK SPV  bg.png', name: 'Fire Truck SPV' },
  { src: '/assets/SPV/22 FOOTER- WING VAN bg.png', name: '22 Footer Wing Van' },
  { src: '/assets/SPV/GARBAGE COMPACTOR bg.png', name: 'Garbage Compactor' },
  { src: '/assets/SPV/MOBILE OFFICE bg.png', name: 'Mobile Office' },
  { src: '/assets/SPV/MOBILE CLINIC bg.png', name: 'Mobile Clinic' },
  { src: '/assets/SPV/MOBILE RESCUE bg.png', name: 'Mobile Rescue' },
  { src: '/assets/SPV/MOBILE COMMAND CENTER bg.png', name: 'Mobile Command Center' },
  { src: '/assets/SPV/TROOP CARRIER bg.png', name: 'Troop Carrier' },
  { src: '/assets/SPV/STAKE TRUCK bg.png', name: 'Stake Truck' },
  { src: '/assets/SPV/TOW TRUCK.png', name: 'Tow Truck' },
  { src: '/assets/SPV/DIGGER DERICK bg.png', name: 'Digger Derrick' },
  { src: '/assets/SPV/DROPSIDE WITH CANOPY.png', name: 'Dropside with Canopy' },
  { src: '/assets/SPV/DROPSIDE WITH BOOM CRANE bg.png', name: 'Dropside with Boom Crane' },
  { src: '/assets/SPV/CAR CARRIER bg.png', name: 'Car Carrier' },
  { src: '/assets/SPV/PALETIZED BODY bg.png', name: 'Paletized Body' },
  { src: '/assets/SPV/MULTI ELEMENTS ON WHEELS bg.png', name: 'Multi Elements on Wheels' },
  { src: '/assets/SPV/Isuzu Mobile Training Van.png', name: 'Isuzu Mobile Training Van' },
  { src: '/assets/SPV/HEIL BULK CARIER.png', name: 'Heil Bulk Carrier' },
];

const heavySpv = [
  { src: '/assets/SPV heavy/DUMP TRUCK bg.png', name: 'Dump Truck' },
  { src: '/assets/SPV heavy/CORN DUMPTRUCK bg.png', name: 'Corn Dumptruck' },
  { src: '/assets/SPV heavy/18 cum SCOOP END DUMPTRUCK bg.png', name: '18 cum Scoop End Dumptruck' },
  { src: '/assets/SPV heavy/30 cum SCOOP END DUMPTRUCK bg.png', name: '30 cum Scoop End Dumptruck' },
  { src: '/assets/SPV heavy/FIRE TRUCK bg.png', name: 'Fire Truck' },
  { src: '/assets/SPV heavy/FLAT BED TRUCK bg.png', name: 'Flat Bed Truck' },
  { src: '/assets/SPV heavy/BROILER VAN bg.png', name: 'Broiler Van' },
  { src: '/assets/SPV heavy/20 PALLETS bg.png', name: '20 Pallets' },
  { src: '/assets/SPV heavy/HINO IMPORTED bg.png', name: 'Hino Imported' },
  { src: '/assets/SPV heavy/HINO FG8J 4X2 BOOM TRUCK WITH AUGER CRANE  bg.png', name: 'Hino FG8J 4x2 Boom Truck with Auger Crane' },
  { src: '/assets/SPV heavy/ISUZU IMPORTED bg.png', name: 'Isuzu Imported' },
  { src: '/assets/SPV heavy/FUSO IMPORTED bg.png', name: 'Fuso Imported' },
];

const clients = [
  { src: '/assets/CLIENTS/coca-cola.png', alt: 'Coca-Cola' },
  { src: '/assets/CLIENTS/san-miguel.png', alt: 'San Miguel Corporation' },
  { src: '/assets/CLIENTS/jm.png', alt: 'JM' },
  { src: '/assets/CLIENTS/jt-express.png', alt: 'J&T Express' },
  { src: '/assets/CLIENTS/zest-air.png', alt: 'Zest Air' },
  { src: '/assets/CLIENTS/kia.png', alt: 'Kia' },
  { src: '/assets/CLIENTS/isuzu.png', alt: 'Isuzu' },
  { src: '/assets/CLIENTS/mitsubishi.png', alt: 'Mitsubishi' },
  { src: '/assets/CLIENTS/fuso.png', alt: 'Fuso' },
];

function ProductGrid({ items }: { items: { src: string; name: string }[] }) {
  return (
    <div className="products__grid">
      {items.map((item, i) => (
        <div key={i} className="product-card">
          <Image src={item.src} alt={item.name} width={320} height={240} className="product-card__img" unoptimized />
          <p className="product-card__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

function Category({ title, items }: { title: string; items: { src: string; name: string }[] }) {
  return (
    <div className="products__category">
      <h3 className="products__category-title">{title}</h3>
      <ProductGrid items={items} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <Image src="/assets/kv.png" alt="Almazora Motors" width={1920} height={1080} style={{ width: '100%', height: 'auto', display: 'block', animation: 'none', transform: 'none' }} priority unoptimized />
        </div>
        {/* Desktop overlay text */}
        <div className="hero__content-overlay hero__content-overlay--desktop">
          <div className="container">
            <h1 className="hero__title">Crafting Tomorrow&apos;s Journeys: Innovation, Quality, and Integrity</h1>
            <p className="hero__subtitle">For over 100 years, ALMAZORA takes pride in its longstanding history of manufacturing various types of transportation.</p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-indicator__text">Scroll</span>
          <svg className="scroll-indicator__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </section>

      {/* Mobile text section — shown below KV on mobile only */}
      <section className="hero__mobile-text">
        <div className="container">
          <h1 className="hero__mobile-title">Crafting Tomorrow&apos;s Journeys: Innovation, Quality, and Integrity</h1>
          <p className="hero__mobile-subtitle">For over 100 years, ALMAZORA takes pride in its longstanding history of manufacturing various types of transportation.</p>
        </div>
      </section>

      {/* Featured Carousel */}
      <FeaturedCarousel />

      {/* Road Carousel */}
      <section className="road-carousel">
        <div className="road-carousel__track">
          {[...carouselVehicles, ...carouselVehicles].map((v, i) => (
            <div key={i} className="road-carousel__vehicle">
              <Image src={v.src} alt={v.alt} width={280} height={180} unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="products section">
        <div className="container">
          <h2 className="section__title reveal">All Products</h2>
          <Category title="Buses" items={buses} />
          <Category title="Utility Vehicles" items={uvs} />
          <Category title="Light Special Vehicle" items={lightSpv} />
          <Category title="Medium Special Vehicle" items={mediumSpv} />
          <Category title="Heavy Special Vehicle" items={heavySpv} />
        </div>
      </section>

      {/* Clients */}
      <section className="clients section">
        <div className="container">
          <h2 className="section__title reveal">Our Clients</h2>
          <div className="clients__grid">
            {clients.map((c, i) => (
              <Image key={i} src={c.src} alt={c.alt} width={120} height={60} className="clients__logo" unoptimized />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
