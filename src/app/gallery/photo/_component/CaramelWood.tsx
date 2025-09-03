"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import image5 from "@/assets/Group 1/group1-9.jpg"
import image6 from "@/assets/Group 1/group1-10.jpg"
import image7 from "@/assets/Group 1/group1-11.jpg"
import image8 from "@/assets/Group 1/group1-12.jpg"


export default function CaramelWood() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="mt-28 text-6xl font-bold text-[#3F4919]">
          Caramel-wood Grain
        </h2>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        {/* Big Left Image */}
             <Image
                 src={image5}
                 alt="Wood Deck Small 3"
                className=" w-full rounded-3xl object-cover col-span-7"
               />
               <Image
                 src={image6}
                 alt="Wood Deck Small 1"
                className=" w-full rounded-3xl object-cover col-span-5"
               />
               <Image
                 src={image7}
                 alt="Wood Deck Small 2"
                className=" w-full rounded-3xl object-cover col-span-5"
               />
               <Image
                 src={image8}
                 alt="Wood Deck Small 2"
                className=" w-full rounded-3xl object-cover col-span-7"
               />
     
     
      </div>
    </section>
  )
}
