'use client'
import React from "react";
import { StaticImageData } from "next/image";
import Button from "@/components/seraui/button";
import { usePathname } from "next/navigation";

interface HeroProps {
  heading: string;
  highlight: string;
  paragraph: string;
  image: StaticImageData;
}

const SeraUIHero: React.FC<HeroProps> = ({
  heading,
  highlight,
  paragraph,
  image,
}) => {
  const highlightIndex = heading.indexOf(highlight);
  let before = heading;
  let after = "";

  if (highlightIndex !== -1) {
    before = heading.slice(0, highlightIndex);
    after = heading.slice(highlightIndex + highlight.length);
  }

  const pathname = usePathname();


  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[675px]"
    >
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold font-[inter] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6 italic">
              {before}
              <span className="text-[#C7E44E]">{highlight}</span>
              {after}
            </h1>

            <p className="text-base sm:text-lg text-white font-[inter] max-w-xl md:max-w-3xl mx-auto mb-10">
              {paragraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-16 w-44 bg-[#94B316] text-white text-2xl hover:text-black hover:bg-green-900 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700 inline-flex items-center justify-center rounded-4xl  font-medium transition-colors">
                Shop Now
              </Button>
      {
        pathname !== "/products" ?(
          <Button
            variant="outline"
            className="h-16 w-72   border border-[#8FAD15] hover:border-0 hover:text-black hover:bg-green-900 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700 inline-flex items-center justify-center rounded-4xl text-2xl text-white  transition-colors"
          >
            Order Free Samples
          </Button>
        ) : <></>
      }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeraUIHero;
