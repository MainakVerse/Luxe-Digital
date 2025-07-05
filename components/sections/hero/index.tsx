"use client";

import React, { useRef } from "react";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images } from "@/constants";
import Button from "../../atoms/button";
import { BottomLine } from "../../design/hero";
import Typewriter from 'typewriter-effect';

type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem] relative overflow-hidden min-h-screen")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container relative z-10 flex flex-col justify-center min-h-screen" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6 text-yellow-400">
            We Frame Your{" "}
            <span className="text-yellow-300">
              <Typewriter
                options={{
                  strings: ['Birthdays', 'Weddings', 'Events', 'Moments', 'Beauty'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: '|',
                }}
              />
            </span>
          </h1>
          <p className={cn("body-1 max-w-3xl mx-auto mb-6 text-yellow-100/80 lg:mb-8")}>
           Make you digital prescence can now be more intuitive, engaging, and personalized than ever before, with Luxe.
          </p>
          <div className="inline-block">
            <Button 
              href="#features" 
              className="relative px-12 py-4 text-lg font-bold bg-black text-yellow-400 border-2 border-yellow-400 rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-400/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:rounded-lg overflow-hidden"
            >
              <span className="relative z-10">Know More</span>
            </Button>
          </div>
        </div>

        <div className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}>
          
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%] opacity-20">
            <Image
              src={images.heroBackground}
              width={1440}
              height={1880}
              className="w-full"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;