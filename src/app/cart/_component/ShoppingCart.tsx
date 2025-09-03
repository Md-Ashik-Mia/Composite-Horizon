"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import OrderSummary from "./OrderSummary";

type CartItem = {
  id: number;
  name: string;
  color: string;
  colorHex: string;
  image: string;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Brulee-wood Grain",
    color: "Rich Tan",
    colorHex: "#b87333",
    image: "/wood.png", // replace with your product image
    price: 19,
    quantity: 2,
  },
  {
    id: 2,
    name: "Brulee-wood Grain",
    color: "Rich Tan",
    colorHex: "#b87333",
    image: "/wood.png",
    price: 19,
    quantity: 2,
  },
  {
    id: 3,
    name: "Brulee-wood Grain",
    color: "Rich Tan",
    colorHex: "#b87333",
    image: "/wood.png",
    price: 19,
    quantity: 2,
  },
  {
    id: 4,
    name: "Brulee-wood Grain",
    color: "Rich Tan",
    colorHex: "#b87333",
    image: "/wood.png",
    price: 19,
    quantity: 2,
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-around">
        <div>
             <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              {/* Product */}
              <TableCell>
                <div className="flex items-start gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-md border"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Color: {item.color}
                      <span
                        className="ml-2 inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.colorHex }}
                      />
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-1 text-sm text-red-500 hover:underline mt-1"
                    >
                      <X size={14} /> Remove
                    </button>
                  </div>
                </div>
              </TableCell>

              {/* Quantity */}
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, "dec")}
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, "inc")}
                  >
                    <Plus size={14} />
                  </Button>
                </div>
              </TableCell>

              {/* Price */}
              <TableCell>
                ${item.price.toFixed(2)}
                <span className="text-muted-foreground">/each</span>
              </TableCell>

              {/* Subtotal */}
              <TableCell className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
        <div><OrderSummary></OrderSummary></div>
      </div>
    </div>
  );
}





// const ShoppingCart = () => {
//   return (
//    <div>

//    </div>
//   )
// }

// export default ShoppingCart
