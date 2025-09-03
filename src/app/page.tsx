import Button from "@/components/seraui/button";
import SeraUIHero from "@/components/seraui/hero4";
import { Button as ShedButton } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/app/_component/WhyChooseUs";
import DiscoverWood from "./_component/DiscoverWood";
import Inspiration from "./_component/Inspiration";
import FAQSection from "./_component/FAQSection";
import ReviewCarousel from "@/components/common/ReviewCarousel";
import ContactSection from "@/components/common/ContactSection";

export default function Home() {
  return (
    <div className="font-[inter]">
     <SeraUIHero></SeraUIHero>
     <WhyChooseUs></WhyChooseUs>
     <DiscoverWood></DiscoverWood>
     <Inspiration></Inspiration>
     <FAQSection></FAQSection>
     <ReviewCarousel></ReviewCarousel>
     <ContactSection></ContactSection>
    </div>
  );
}
