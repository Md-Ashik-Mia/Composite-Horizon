import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/playplayicon.png";
const Inspiration = () => {
  return (
    <div>
      <div className="w-[1196px] mx-auto mt-7">
        <h1 className="text-[64px] text-center">
          Composite Fencing Inspirations
        </h1>
        <p className="text-[20px] text-center mt-4">
          Explore our gallery to see a range of premium deck fence designs, from
          modern minimalist to rustic charm
        </p>
      </div>

      <section className=" 
       px-4 py-10 space-y-6">
        {/* Top Video Section */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={image4} // replace with your image
            alt="Deck video"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 flex items-center justify-center  shadow-lg hover:scale-110 transition-transform">
               <Image
            src={image5}
            alt="White railing stairs"
            width={103}
            height={111}
            className="rounded-lg object-cover w-full"
          />
            </button>
          </div>
        </div>

        {/* Three Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image
            src={image1}
            alt="Deck with lake"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src={image2}
            alt="White railing stairs"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src={image3}
            alt="Wooden deck"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-center pt-4">
          <Button className="bg-lime-600 hover:bg-lime-700 text-white rounded-full px-6 py-2">
            View Gallery
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
