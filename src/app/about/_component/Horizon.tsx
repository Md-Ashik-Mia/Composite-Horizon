// app/components/WhyHorizonComposite.tsx
import Image from "next/image";
import image6 from "@/assets/image-6.jpg";
import image7 from "@/assets/image-7.jpg";
import image8 from "@/assets/image-8.jpg";
import Button from "@/components/seraui/button";


export default function WhyHorizonComposite() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-12 ">
      <div className="flex justify-around ">
        <h2 className="text-8xl font-bold leading-snug mb-4 flex-1/2">
          Why <span className="text-[#94B316] italic">Horizon</span>{" "}
          <span className="text-[#94B316]">Composite</span>
        </h2>
        <div className="flex-1/2">
          <h3 className="text-4xl font-semibold text-[#688301] mb-2">
            Innovative and Durable Fencing Solutions
          </h3>
          <p className="text-[#6D6D6D] text-2xl leading-9 mb-6">
            We blend innovation with reliability to bring you fencing solutions
            that elevate every space. Our products are engineered for
            durability, crafted from recycled materials, and designed to
            withstand harsh weather without fading, warping, or rotting.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Image
            src={image6}
            alt="Deck"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={image7}
            alt="Deck with pool"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={image8}
            alt="Outdoor seating"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-around ">
        <Button className="bg-[#94B316] w-72 h-16 rounded-4xl text-white text-2xl mt-3.5">Explore Cost</Button>
      </div>
    </section>
  );
}
