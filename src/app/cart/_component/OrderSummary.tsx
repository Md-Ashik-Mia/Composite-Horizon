"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function OrderSummary() {
  const [coupon, setCoupon] = useState("");

  return (
    <Card className="max-w-md bg-lime-50 border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Accordion for additional note */}
        <Accordion type="single" collapsible>
          <AccordionItem value="note">
            <AccordionTrigger className="text-sm">
              Add Additional order note
            </AccordionTrigger>
            <AccordionContent>
              <Textarea placeholder="Enter here..." />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Taxes info */}
        <p className="text-xs text-muted-foreground">
          Taxes and Shipping calculated at checkout.
        </p>

        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">$00.00</span>
        </div>

        {/* Coupon code */}
        <div className="space-y-1">
          <p className="text-sm font-medium">Have a coupon?</p>
          <p className="text-xs text-muted-foreground">
            Add your code for an instant cart discount
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="bg-white"
            />
            <Button className="bg-lime-500 hover:bg-lime-600 text-white">
              Apply
            </Button>
          </div>
        </div>

        {/* Checkout button */}
        <Button className="w-full rounded-full bg-lime-500 hover:bg-lime-600 text-white text-lg">
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
