import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Hero from "@/components/sections/hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import Brands from "@/components/sections/brands";
import Modelling from "@/components/sections/modelling";
import Photographers from "@/components/sections/photographers";
import FAQ from "@/components/sections/faq";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <Hero />
        <Benefits />
        <Modelling />
        <Photographers />
        <Brands />        
        <FAQ />
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
