import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { benefits } from "@/constants";
import Image from "next/image";

type Props = {};

const Brands = (props: Props) => {
  return (
    <Section id="brands">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mb-16"
          title="Check Out Our Collaborating Partners"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] overflow-hidden">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    width={400}
                    height={300}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Golden accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Subtle golden glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/30 via-transparent to-yellow-600/30 pointer-events-none" />

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Brands;