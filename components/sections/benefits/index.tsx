import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { benefits } from "@/constants";
import Image from "next/image";
import Arrow from "@/components/svg/arrow";

import ClipPath from "@/components/svg/clip-path";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <Section id="features" className="bg-white">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-yellow-600"
          title="Cover Your Best Moments with Luxe Cloud"
        />

        <div className="mb-10 flex flex-wrap gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-sm"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem] bg-white/90">
                <h5 className="h5 mb-5 text-black">{item.title}</h5>
                <p className="body-2 mb-6 text-black-100/80">{item.text}</p>
                <div className="mt-auto flex items-center">
                  {/* <Image src={item.iconUrl} width={48} height={48} alt={item.title} /> */}
                  <p className="font-code text-xs font-bold uppercase tracking-wider text-black-300">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              

              <div className="absolute inset-0.5 bg-white" style={{ clipPath: `url(#benefits)` }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="size-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;