"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import image30 from "@/assets/Group 1/group1-1.jpg"
import image31 from "@/assets/Group 1/group1-2.jpg"
import image32 from "@/assets/Group 1/group1-3.jpg"
import image33 from "@/assets/Group 1/group1-4.jpg"


export default function WoodGrainSection() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="mt-28 text-6xl font-bold text-[#3F4919]">
          Brulee-wood Grain
        </h2>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        {/* Big Left Image */}

        <div className="col-span-7">
            <Image
              src={image30}
              
              alt="Wood Deck Main"
              className=" w-full object-cover rounded-3xl"
            />
        </div>
       

        {/* Right Column Small Images */}
        <div className="grid col-span-5 gap-6">
               <Image
                 src={image31}
                 alt="Wood Deck Small 1"
                className=" w-full rounded-3xl object-cover"
               />
               <Image
                 src={image32}
                 alt="Wood Deck Small 2"
                className=" w-full rounded-3xl object-cover"
               />
        </div>
        <div className=" col-span-12 gap-6">
             <Image
                 src={image33}
                 alt="Wood Deck Small 3"
                className=" w-full rounded-3xl object-cover"
               />
        </div>
      </div>
    </section>
  )
}
