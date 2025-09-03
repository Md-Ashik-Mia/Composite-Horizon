
import wood11 from "@/assets/image-11.jpg";
import wood12 from "@/assets/image-12.jpg";
import wood13 from "@/assets/image-13.jpg";
import { StaticImageData } from "next/image";

type Feature = string | Feature[];
interface Product {
productId: number | string
  image: StaticImageData | string
  title: string
  availability: string
  price: string
  features: Feature[];
  colors: string[]
  description?: string
}

export const products: Product[] = [
  {
    productId: 1,
    image: wood11,
    title: "Brulee-wood Grain",
    price: "100$",
    availability: "In Stock",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#C49A6C", "#B47B45", "#8C5A2B", "#5A3A1B"],
    description: "Reimagine your property’s perimeter with our premium composite fence boards, engineered to blend sophisticated style and lasting performance. Available in four deep, rich hues, they preserve their natural, contemporary look season after season without fading. Crafted from 60 % recycled wood powder, 34 % plastic (including 10 % virgin plastic for strength), and 6 % high-performance additives, these fence boards offer outstanding resistance to impacts, UV rays and moisture. Maintenance is a breeze—no more sanding or staining: a simple wash with soapy water restores their original sheen and texture. Their non-slip, embossed surface and smooth, splinter-free edges ensure both comfortable handling during installation and safe enjoyment for everyone on your property. Designed to remain warp- and crack-free for over 20 years, our fence boards help upcycle wood and plastic waste, giving your outdoor living area a beautiful—and responsible—upgrade. Elevate your yard with a fence that combines elegance, durability and peace of mind."
  },
  {
    productId: 2,
    image: wood12,
    title: "Red Bordeaux-wood Grain",
    price: "200$",
    availability: "In Stock",
    features: [
      "20 Year limited residential warranty",
      "Linear grain pattern with refined streaking",
    ],
    colors: ["#6B2C20", "#A6361F", "#BF4C29", "#D85E33"],
    description: "Reimagine your property’s perimeter with our premium composite fence boards, engineered to blend sophisticated style and lasting performance. Available in four deep, rich hues, they preserve their natural, contemporary look season after season without fading. Crafted from 60 % recycled wood powder, 34 % plastic (including 10 % virgin plastic for strength), and 6 % high-performance additives, these fence boards offer outstanding resistance to impacts, UV rays and moisture. Maintenance is a breeze—no more sanding or staining: a simple wash with soapy water restores their original sheen and texture. Their non-slip, embossed surface and smooth, splinter-free edges ensure both comfortable handling during installation and safe enjoyment for everyone on your property. Designed to remain warp- and crack-free for over 20 years, our fence boards help upcycle wood and plastic waste, giving your outdoor living area a beautiful—and responsible—upgrade. Elevate your yard with a fence that combines elegance, durability and peace of mind."
  },
  {
    productId: 3,
    image: wood13,
    availability: "Out of Stock",
    title: "Caramel-wood Grain",
    price: "300$",
    features: [
  "No warping, cracking or rotting",
  "75” On-Center Spacing Between Posts",
  [
    "Gate Kits:",
    [
      "Maximum gate width: 4’6”",
      "For gates wider than 4’, a gate wheel is recommended",
      "Consider adding an extra hinge kit",
    ],
  ],
],

    colors: ["#C97A36", "#E69747", "#B85F2A", "#8A3F18"],
    description: "Reimagine your property’s perimeter with our premium composite fence boards, engineered to blend sophisticated style and lasting performance. Available in four deep, rich hues, they preserve their natural, contemporary look season after season without fading. Crafted from 60 % recycled wood powder, 34 % plastic (including 10 % virgin plastic for strength), and 6 % high-performance additives, these fence boards offer outstanding resistance to impacts, UV rays and moisture. Maintenance is a breeze—no more sanding or staining: a simple wash with soapy water restores their original sheen and texture. Their non-slip, embossed surface and smooth, splinter-free edges ensure both comfortable handling during installation and safe enjoyment for everyone on your property. Designed to remain warp- and crack-free for over 20 years, our fence boards help upcycle wood and plastic waste, giving your outdoor living area a beautiful—and responsible—upgrade. Elevate your yard with a fence that combines elegance, durability and peace of mind."

  },
]
