import React from "react";
import { CarouselSize } from "./CarouselSize";

const DiscoverWood = () => {
  return (
    <div>
      <div className="w-[1196px] mx-auto ">
        <h1 className="text-[64px] text-center">
          Discover Authentic wood finishes you won't find anywhere else
        </h1>
        <p className="text-[20px] text-center mt-4">
          Our wood finishes are not mass-produced imitations — they’re carefully
          curated to bring out the natural beauty, texture, and character of
          real wood
        </p>
      </div>
      <div className="w-[1800px] mx-auto ">
        <CarouselSize></CarouselSize>
      </div>
    </div>
  );
};

export default DiscoverWood;
