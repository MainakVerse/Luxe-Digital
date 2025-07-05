import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import Image from "next/image";

// Photographer data with images and descriptions
const photographerData = {
  1: {
    imageUrl: "/images/photographer-1.png",
    name: "Alexander Chen",
    specialty: "Portrait & Fashion Photography",
    description: "Capturing the essence of human emotion through contemporary portrait work and high-fashion editorial shoots."
  },
  2: {
    imageUrl: "/images/photographer-2.png",
    name: "Sofia Rodriguez",
    specialty: "Wedding & Event Photography",
    description: "Preserving life's most precious moments with an artistic eye for candid emotion and timeless elegance."
  },
  3: {
    imageUrl: "/images/photographer-3.png",
    name: "Marcus Thompson",
    specialty: "Street & Documentary",
    description: "Telling powerful stories through urban landscapes and authentic documentary-style photography."
  },
  4: {
    imageUrl: "/images/photographer-4.png",
    name: "Isabella Kim",
    specialty: "Nature & Wildlife",
    description: "Exploring the natural world through breathtaking landscape and wildlife photography adventures."
  },
  5: {
    imageUrl: "/images/photographer-5.png",
    name: "David Martinez",
    specialty: "Commercial & Product",
    description: "Creating compelling visual narratives for brands through innovative commercial and product photography."
  },
  6: {
    imageUrl: "/images/photographer-6.png",
    name: "Emma Williams",
    specialty: "Fine Art & Conceptual",
    description: "Pushing creative boundaries through experimental fine art and conceptual photography projects."
  }
};

type Props = {};

const Photographers = (props: Props) => {
  return (
    <Section id="photographers" className="bg-white">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mx-auto mb-16"
          title="Meet Our Visionary Photographers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {Object.entries(photographerData).map(([id, photographer]) => (
            <div
              key={id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-yellow-500/50"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={photographer.imageUrl}
                    fill
                    alt={photographer.name}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    {photographer.name}
                  </h3>
                  <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wide">
                    {photographer.specialty}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {photographer.description}
                </p>
                
                {/* Action button */}
                <div className="pt-4 flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/btn">
                    <span className="text-sm font-semibold">View Portfolio</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  {/* Social icons */}
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300 cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Photographers;