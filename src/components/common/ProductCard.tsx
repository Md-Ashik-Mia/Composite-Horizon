import { Button } from "@/components/ui/button"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"


interface ProductCardProps {
  productId : number|string
  image: StaticImageData | string
  title: string
  price: string
  features: string[]
  colors: string[]
  availability?: string
  description?: string
}

export default function ProductCard({
  productId,
  image,
  title,
  price,
  features,
  colors,
  availability,
  description
}: ProductCardProps) {
  return (
    <div className="w-xl  shadow-black/5 shadow-lg rounded-lg overflow-hidden">
      <div className="p-0">
        {/* Product Image */}
        <div className="w-full h-[26.938rem] relative overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-4 text-[#3F4919]">
          <h3 className="text-4xl font-medium leading-8 ">{title}</h3>
          <p className="font-semibold text-2xl leading-10">
            Price: <span className="font-normal">{price}$</span>
          </p>

          {/* Features */}
          <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
            {features.map((feature, idx) => (
              <li className="text-xl leading-8" key={idx}>{feature}</li>
            ))}
          </ul>

          {/* Color options */}
          <div className="mt-2 text-2xl  flex gap-3.5 items-center">
            <p className="font-medium text-2xl">Color:</p>
            <div className="flex gap-2 mt-1">
              {colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-8 h-8 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <Link href={`/cart`}><Button
              variant="outline"
              className="rounded-full text-[#3F4919] border-[#94B316] w-44 h-12 text-2xl leading-8 py-2.5 px-7 hover:bg-green-50"
            >
              Shop Now
            </Button>
            </Link>
            <Link href={`/products/${productId}`}>
            <Button
              variant="outline"
              className="rounded-full text-[#3F4919] border-[#94B316] w-52 h-12 text-2xl leading-8 py-2.5 px-7 hover:bg-green-50"
            >
              Explore more
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
