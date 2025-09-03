"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // shadcn helper (optional)
import { useState } from "react";
import CheckoutDetails from "./_component/CheckoutDetails";
import OrderComplete from "./_component/OrderComplete";
import ShoppingCart from "./_component/ShoppingCart";
// Steps definition
const steps = [
  { id: 1, label: "Shopping cart", component: <ShoppingCart /> },
  { id: 2, label: "Checkout details", component: <CheckoutDetails /> },
  { id: 3, label: "Order complete", component: <OrderComplete /> },
];

export default function CheckoutFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <div className="container mx-auto p-6 space-y-10">
      <div className="flex  justify-center">
        <p className="w-96 text-center h-16 bg-[#D9E0BC] text-[#3F4919] rounded-4xl text-5xl font-bold">Your Cart</p>
      </div>
      {/* Progress Bar */}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex-1 flex gap-3  items-center">
            <div
              className={cn(
                "w-13 h-13 text-2xl rounded-full flex items-center justify-center text-white font-bold",
                currentStep >= step.id ? "bg-[#99BA14]" : "bg-[rgba(148,179,22,0.1)] text-[#99BA14]"
              )}
            >
              {step.id}
            </div>
            <span
              className={cn(
                "mt-2 text-2xl  ",
                currentStep >= step.id ? "text-[#3F4919] font-semibold" : "text-gray-500"
              )}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Line */}
      <div className="w-full h-1 bg-gray-200 relative">
        <div
          className="absolute top-0 left-0 h-1 bg-[#99BA14] transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <Card className="shadow-lg border rounded-2xl">
        <CardContent className="p-6">{steps[currentStep - 1].component}</CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 1} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </Button>
      </div>

    </div>
  );
}
