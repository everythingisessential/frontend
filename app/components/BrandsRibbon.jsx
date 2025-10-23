"use client";

import Marquee from "react-fast-marquee";

const brands = [
  { name: "Nike", src: "/nike.jpeg" },
  { name: "Adidas", src: "/adidas.jpeg" },
  { name: "Puma", src: "/nike.jpeg" },
  { name: "Reebok", src: "/adidas.jpeg" },
  { name: "New Balance", src: "/nike.jpeg" },
  { name: "Under Armour", src: "/adidas.jpeg" },
  { name: "New Balance", src: "/nike.jpeg" },
  { name: "Under Armour", src: "/adidas.jpeg" },

];

export default function BrandsRibbon() {
  return (
    <section className="bg-gray-50 py-6 overflow-hidden">
      <h1 className="text-center text-5xl font-bold mb-6 mt-8">Brands at EIE</h1>
      <Marquee
        // pauseOnHover
        gradient={false}
        speed={50}
        className="flex items-center space-x-32"
      >
        {brands.map((brand, idx) => (
          <div key={idx} className="flex-shrink-0 ml-25">
            <img
              src={brand.src}
              alt={brand.name}
              loading="lazy"
              className="h-12 sm:h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
