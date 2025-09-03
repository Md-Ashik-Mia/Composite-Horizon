"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import image5 from "@/assets/Group 1/group1-5.jpg"
import image6 from "@/assets/Group 1/group1-6.jpg"
import image7 from "@/assets/Group 1/group1-7.jpg"
import image8 from "@/assets/Group 1/group1-8.jpg"


export default function RedBordeaux() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="mt-28 text-6xl font-bold text-[#3F4919]">
          Red Bordeaux-wood Grain
        </h2>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        {/* Big Left Image */}
           <div className=" col-span-12 gap-6">
             <Image
                 src={image5}
                 alt="Wood Deck Small 3"
                className=" w-full rounded-3xl object-cover"
               />
        </div>
        
               <Image
                 src={image6}
                 alt="Wood Deck Small 1"
                className=" w-full rounded-3xl object-cover col-span-4"
               />
               <Image
                 src={image7}
                 alt="Wood Deck Small 2"
                className=" w-full rounded-3xl object-cover col-span-4"
               />
               <Image
                 src={image8}
                 alt="Wood Deck Small 2"
                className=" w-full rounded-3xl object-cover col-span-4"
               />
     
     
      </div>
    </section>
  )
}
