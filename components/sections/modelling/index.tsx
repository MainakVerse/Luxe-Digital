import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import Image from "next/image";

// Modelling data with images and descriptions
const modellingData = {
  1: {
    imageUrl: "/images/model-1.png",
    name: "Alex Blackwood",
    specialty: "High Fashion & Runway",
    description: "International runway sensation with campaigns for top luxury brands and appearances at Paris, Milan, and New York Fashion Weeks."
  },
  2: {
    imageUrl: "/images/model-3.png",
    name: "Zara Phoenix",
    specialty: "Commercial & Beauty",
    description: "Versatile commercial model specializing in beauty campaigns, lifestyle shoots, and brand ambassador collaborations."
  },
  3: {
    imageUrl: "/images/model-2.png",
    name: "Luna Sterling",
    specialty: "Editorial & Art Fashion",
    description: "Creative editorial model known for avant-garde fashion spreads and artistic collaborations with renowned photographers."
  },
  4: {
    imageUrl: "/images/model-4.png",
    name: "Shanaya Tripathi",
    specialty: "Fitness & Activewear",
    description: "Dynamic fitness model promoting healthy lifestyle brands and athletic wear for leading sportswear companies."
  },
  5: {
    imageUrl: "/images/model-5.png",
    name: "Ardas Singh Sarao",
    specialty: "Plus Size & Body Positive",
    description: "Trailblazing plus-size model advocating for body positivity and inclusive representation in the fashion industry."
  },
  6: {
    imageUrl: "/images/model-6.png",
    name: "Markus Bhattacharya",
    specialty: "Male Fashion & Lifestyle",
    description: "Distinguished male model with expertise in menswear campaigns, luxury brand endorsements, and lifestyle photography."
  }
};

type Props = {};

const Modelling = (props: Props) => {
  return (
    <Section id="modelling" className="bg-white">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mx-auto mb-16"
          title="Meet Our Rising Models"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {Object.entries(modellingData).map(([id, model]) => (
            <div
              key={id}
              className="group relative bg-gradient-to-br from-gray-900 to-black overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(45deg, #1a1a1a, #000), linear-gradient(45deg, #ffd700, #ffed4e, #ffd700)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-80"></div>
              
              {/* Diagonal accent lines */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-2 right-2 w-12 h-0.5 bg-yellow-400 transform rotate-45 opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-12 h-0.5 bg-yellow-400 transform rotate-45 opacity-60"></div>
              </div>
              
              {/* Image container */}
              <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}>
                <div className="aspect-[4/5] relative">
                  <Image
                    src={model.imageUrl}
                    fill
                    alt={model.name}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hexagonal overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Geometric overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-400 transform rotate-45"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-yellow-400 transform rotate-12"></div>
                  </div>
                </div>
                
                {/* Angular badge */}
                <div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 text-xs font-bold uppercase tracking-wider transform -skew-x-12"
                  style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                >
                  Rising Star
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative">
                {/* Title section with geometric accent */}
                <div className="space-y-2 relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
                  <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 pl-4">
                    {model.name}
                  </h3>
                  <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wide pl-4">
                    {model.specialty}
                  </p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {model.description}
                </p>
                
                {/* Action section with angular design */}
                <div className="pt-4 flex items-center justify-between relative">
                  {/* Angular background for button area */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ clipPath: 'polygon(0 0, 70% 0, 80% 100%, 0 100%)' }}>
                  </div>
                  
                  <button className="relative flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/btn z-10">
                    <span className="text-sm font-semibold">View Portfolio</span>
                    <div className="w-4 h-4 border-t-2 border-r-2 border-yellow-400 transform rotate-45 transition-transform duration-300 group-hover/btn:translate-x-1"></div>
                  </button>
                  
                  {/* Angular stats container */}
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-gray-800/50 transform -skew-x-12">
                      <svg className="w-3 h-3 transform skew-x-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="transform skew-x-12">4.9</span>
                    </div>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-400/20 transform -skew-x-12">
                      <svg className="w-3 h-3 transform skew-x-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="transform skew-x-12">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geometric glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Modelling;