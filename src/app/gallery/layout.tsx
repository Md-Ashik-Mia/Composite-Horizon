import React from "react";
import SeraUIHero from "@/components/common/Hero";
import image23 from "@/assets/image-23.jpg";
import Tabs from "./_component/tabs";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="">
      <SeraUIHero
        heading="Inspiration Gallery"
        highlight="Inspiration Gallery"
        paragraph="we’re committed to delivering premium fencing solutions that stand the test of time. Our focus on superior materials, expert craftsmanship, and customer-first service ensures"
        image={image23}
      ></SeraUIHero>
      <Tabs></Tabs>
      <hr className="border-t border-[#D3D3D3]" />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
