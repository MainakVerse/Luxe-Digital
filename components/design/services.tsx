import { images } from "@/constants";
import Image from "next/image";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute -left-40 top-0 size-[56.625rem] opacity-50 mix-blend-color-dodge">
      <Image
        className="absolute left-1/2 top-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={images.gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};




