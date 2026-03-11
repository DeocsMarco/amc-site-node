'use client';
import { useState } from 'react';
import Image from 'next/image';

type Vehicle = { src: string; name: string };
type Category = { id: string; label: string; count: number; items: Vehicle[] };

const categories: Category[] = [
  {
    id: 'buses', label: 'Buses', count: 14,
    items: [
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
    ],
  },
  {
    id: 'uv', label: 'Utility Vehicles', count: 5,
    items: [
      { src: '/assets/UV/TAMARAW UTILITY VEHICLE bg.png', name: 'Tamaraw Utility Vehicle' },
      { src: '/assets/UV/TAMARAW PATROL CARRIER bg.png', name: 'Tamaraw Patrol Carrier' },
      { src: '/assets/UV/TRAVIS UV bg.png', name: 'Travis UV' },
      { src: '/assets/UV/KIA UV bg.png', name: 'Kia UV' },
      { src: '/assets/UV/L300.png', name: 'L300' },
    ],
  },
  {
    id: 'light', label: 'Light SPV', count: 35,
    items: [
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
    ],
  },
  {
    id: 'medium', label: 'Medium SPV', count: 20,
    items: [
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
    ],
  },
  {
    id: 'heavy', label: 'Heavy SPV', count: 12,
    items: [
      { src: '/assets/SPV heavy/DUMP TRUCK bg.png', name: 'Dump Truck' },
      { src: '/assets/SPV heavy/CORN DUMPTRUCK bg.png', name: 'Corn Dumptruck' },
      { src: '/assets/SPV heavy/18 cum SCOOP END DUMPTRUCK bg.png', name: '18 cum Scoop End Dumptruck' },
      { src: '/assets/SPV heavy/30 cum SCOOP END DUMPTRUCK bg.png', name: '30 cum Scoop End Dumptruck' },
      { src: '/assets/SPV heavy/FIRE TRUCK bg.png', name: 'Fire Truck' },
      { src: '/assets/SPV heavy/FLAT BED TRUCK bg.png', name: 'Flat Bed Truck' },
      { src: '/assets/SPV heavy/BROILER VAN bg.png', name: 'Broiler Van' },
      { src: '/assets/SPV heavy/20 PALLETS bg.png', name: '20 Pallets' },
      { src: '/assets/SPV heavy/HINO 32FT WING VAN.png', name: 'Hino 32FT Wing Van' },
      { src: '/assets/SPV heavy/HINO FG8J 4X2 BOOM TRUCK WITH AUGER CRANE  bg.png', name: 'Hino FG8J 4x2 Boom Truck with Auger Crane' },
      { src: '/assets/SPV heavy/ISUZU 32FT WING VAN.png', name: 'Isuzu 32FT Wing Van' },
      { src: '/assets/SPV heavy/FUSO 32FT WING VAN.png', name: 'Fuso 32FT Wing Van' },
    ],
  },
];

export default function VehicleFilter() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? categories : categories.filter(c => c.id === active);

  return (
    <div className="vehicles-body">
      {/* Sticky filter tabs */}
      <div className="vf-tabs">
        <div className="container">
          <div className="vf-tab-list">
            <button
              className={`vf-tab ${active === 'all' ? 'vf-tab--active' : ''}`}
              onClick={() => setActive('all')}
            >
              All <span className="vf-tab__count">85</span>
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                className={`vf-tab ${active === c.id ? 'vf-tab--active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label} <span className="vf-tab__count">{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="vf-content">
        <div className="container">
          {visible.map(cat => (
            <div key={cat.id} className="vf-category">
              <h3 className="vf-category__title">{cat.label}</h3>
              <div className="vf-grid">
                {cat.items.map((item, i) => (
                  <div key={i} className="vf-card">
                    <div className="vf-card__img-wrap">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={320}
                        height={220}
                        className="vf-card__img"
                        unoptimized
                      />
                    </div>
                    <p className="vf-card__name">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
