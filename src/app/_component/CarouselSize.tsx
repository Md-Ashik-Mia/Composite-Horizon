
import GreenButton from "@/components/common/GreenButton"
import ProductCard from "@/components/common/ProductCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import img11 from "@/assets/image-11.jpg"
import img12 from "@/assets/image-12.jpg"
import img13 from "@/assets/image-13.jpg"

export const products = [
  {
    productId: 1,
    image: img11,
    title: "Brulee-wood Grain",
    price: "00$",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#7a6c5d", "#b4a49b", "#c2b1a0", "#8e7c70", "#b57241"],
  },
  {
    productId: 2,
    image: img12,
    title: "Ashen Oak",
    price: "25$",
    features: [
      "15 Year outdoor weather protection",
      "Subtle texture for enhanced grip",
    ],
    colors: ["#d3c5b4", "#a69381", "#7b6857", "#5c4a3a", "#3a2a1d"],
  },
  {
    productId: 3,
    image: img13,
    title: "Maple Sunrise",
    price: "30$",
    features: [
      "Scratch and stain resistant surface",
      "Eco-friendly composite materials",
    ],
    colors: ["#f6d2a0", "#e1b97f", "#cfa266", "#b6864e", "#8d6636"],
  },
];

export function CarouselSize() {
  return (
    <div className="text-center">

<Carousel
  opts={{ align: "center" }} // Center align instead of start
  className="w-full flex justify-center text-left"
>
  <CarouselContent className="flex justify-center">
    {products.map((product, index) => (
      <CarouselItem
        key={index}
        className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
      >
        <ProductCard {...product} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<GreenButton className="mt-4 w-sm text-center" text="View All Products" />
    </div>
  )
}
