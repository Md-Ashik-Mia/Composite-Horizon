'use client';
import Button from "@/components/seraui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Carousel from "./Carousel";
import Description from "./Description";
import InstallationGuide from "./InstallationGuide";
import ShippingReturn from "./ShippingReturn";


import { ProductCardProps } from '../page';
const ProductClientPage = ({data}: {data: ProductCardProps}) => {
      const [quantity, setQuantity] = useState<number>(0);
  return (
      <div>
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Carousel */}
        <div className="w-full">
          <Carousel />
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col space-y-4">
          {/* Title + Stock */}
          <h1 className="text-5xl leading-14 font-semibold text-[#3F4919]">
            {data.title}{" "}
            <span className="text-[#94B316] text-2xl leading-9 font-semibold">
              {data.availability}
            </span>
          </h1>

          {/* Choose Color */}
          <div className="mb-7">
            <label className="block font-medium py-8 text-2xl leading-9 text-[#3F4919]">
              Choose Color
            </label>
            <Select>
              <SelectTrigger className="w-full !h-20 !text-xl border-2">
                <SelectValue placeholder="Choose Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="w-10 h-10 bg-black rounded-sm"></div> Light
                </SelectItem>
                <SelectItem value="dark">
                  <div className="w-10 h-10 bg-red-700 rounded-sm"></div> Dark
                </SelectItem>
                <SelectItem value="system">
                  <div className="w-10 h-10 bg-gray-200 rounded-sm"></div>{" "}
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Choose Height */}
          <div className="mb-7 text-[#3F4919]">
            <label className="block font-medium py-8 text-2xl leading-9 text-[#3F4919]">
              Choose Fence Height
            </label>
            <Select>
              <SelectTrigger className="w-full !h-20 !text-xl border-2">
                <SelectValue placeholder="Choose Height" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6ft">6ft</SelectItem>
                <SelectItem value="8ft">8ft</SelectItem>
                <SelectItem value="10ft">10ft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Linear Footage */}
          <div className="text-2xl">
            <label className="block font-medium py-8 text-2xl leading-9 text-[#3F4919]">
              Enter Linear Footage (Feet)
            </label>
            <Input
              type="number"
              placeholder="Linear Footage"
              className="border-2 !text-2xl rounded-md px-3 py-2 w-full h-20"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium pb-3.5 text-2xl leading-9 text-[#3F4919]">
              Quantity of Fence (simulator calculated)
            </label>
            <div className="flex items-center gap-3.5 ">
              <div className="border-y-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(0, q - 1))}
                  className="border-y-0 border-x-2 px-3 w-12 h-12  py-1 rounded"
                >
                  -
                </button>
                <button className="border-y-0 w-12 h-12 px-3 py-1 rounded border-x-0">
                  {quantity}
                </button>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="border-y-0 border-x-2 w-12 h-12 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
              <span className="text-[#90947F] text-xl leading-7">
                $100/each
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="text-[40px] leading-11 font-bold text-[#3F4919] my-10">
            Total:{" "}
            <span className="">${quantity * parseInt(data.price)}</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Button className="bg-[#94B316] w-80 h-16 text-white font-medium text-2xl leading-8 rounded-4xl">
              Shop Now
            </Button>
            <Button className=" border-2 hover:text-white hover:border-0 border-[#94B316] bg-white w-80 h-16 text-black font-medium text-2xl leading-8 rounded-4xl">
              Add to Cart
            </Button>
            {/* <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold">
            Shop Now
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-md font-semibold">
            Add to Cart
          </button> */}
          </div>

          {/* Share */}
          <div className="text-2xl text-[#667085] flex items-center space-x-3">
            <span>Share:</span>
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="!my-24">
          {" "}
          <Description
            description={data.description ?? ""}
            features={data.features}
          />
        </div>
        <div className="!my-24">
          {" "}
          <ShippingReturn></ShippingReturn>
        </div>
        <div className="!my-24">
          {" "}
          <InstallationGuide></InstallationGuide>
        </div>
      </div>
    </div>
  )
}

export default ProductClientPage
