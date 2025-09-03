import ProductCard  from "@/components/common/ProductCard"
import Button from "@/components/seraui/button"
import wood11 from "@/assets/image-11.jpg"
import wood12 from "@/assets/image-12.jpg"
import wood13 from "@/assets/image-13.jpg"
import { StaticImageData } from "next/image"

interface Product {
productId: number | string
  image: StaticImageData | string
  title: string
  price: string
  features: string[]
  colors: string[]
}

const products: Product[] = [
  {
    productId: 1,
    image: wood11,
    title: "Brulee-wood Grain",
    price: "00$",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#C49A6C", "#B47B45", "#8C5A2B", "#5A3A1B"],
  },
  {
    productId: 2,
    image: wood12,
    title: "Red Bordeaux-wood Grain",
    price: "00$",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#6B2C20", "#A6361F", "#BF4C29", "#D85E33"],
  },
  {
    productId: 3,
    image: wood13,
    title: "Caramel-wood Grain",
    price: "00$",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#C97A36", "#E69747", "#B85F2A", "#8A3F18"],
  },
]

export default function ProductSection() {
  return (
    <section className="py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-6xl leading-14 font-semibold text-[#3F4919] ">Brulee-wood Grain</h2>
      </div>

      {/* Cards Grid */}
      <div className="flex gap-6 justify-around items-center ">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            productId={product.productId}
            image={product.image}
            title={product.title}
            price={product.price}
            features={product.features}
            colors={product.colors}
          />
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-10">
        <Button className="bg-[#94B316] hover:bg-green-700 text-white text-2xl rounded-4xl py-4 px-28">
          See All
        </Button>
      </div>
    </section>
  )
}
