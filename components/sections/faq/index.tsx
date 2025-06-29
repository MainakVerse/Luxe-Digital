/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "@/components/layout/section";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <Section id="cta" className="py-20">
      <div className="container relative z-2">
        {/* Main CTA Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-700 group">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.3),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(234,179,8,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
          </div>

          {/* Golden glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20 pointer-events-none" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            
            {/* Top accent line */}
            <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            {/* Heading */}
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>

            {/* Subheading */}
            <p className="mb-12 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers and transform your experience today. 
              Don't wait – your journey begins now.
            </p>

            {/* CTA Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              
              {/* Primary CTA Button */}
              <button className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-4 text-lg font-semibold text-black hover:from-yellow-300 hover:to-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 min-w-[200px]">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                
                {/* Button accent corner */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-black/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </button>

              {/* Secondary CTA Button */}
              <button className="group/btn2 relative overflow-hidden rounded-xl border-2 border-yellow-400/50 px-8 py-4 text-lg font-semibold text-yellow-400 hover:border-yellow-300 hover:text-yellow-300 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25 min-w-[200px]">
                <span className="relative z-10">Learn More</span>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-yellow-300/0 group-hover/btn2:border-yellow-300/30 rounded-xl transition-all duration-500" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
          </div>

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-yellow-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Side accent lines */}
          <div className="absolute left-0 top-1/2 h-24 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent transform -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
          <div className="absolute right-0 top-1/2 h-24 w-1 bg-gradient-to-b from-transparent via-yellow-400 to-transparent transform -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 left-1/4 w-8 h-8 border border-yellow-400/30 rounded-full opacity-40 animate-pulse" />
        <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-yellow-400/20 rounded-full opacity-60 animate-pulse delay-1000" />
      </div>
    </Section>
  );
};

export default CallToAction;