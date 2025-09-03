"use client";
import React from "react";
import { Shield, Leaf, Hammer, Paintbrush } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Paintbrush className="w-10 h-10 text-lime-600" />,
      text: "Never paint, stain, seal",
    },
    {
      icon: <Hammer className="w-10 h-10 text-lime-600" />,
      text: "Tough, Beautiful, and Easy to Install",
    },
    {
      icon: <Leaf className="w-10 h-10 text-lime-600" />,
      text: "Product made of 60% wood powder, 34% plastic (10% verging plastic for Cap), 6% additives & recycled materials",
    },
    {
      icon: <Shield className="w-10 h-10 text-lime-600" />,
      text: "More durable than other composite boards",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">
          Why <span className="text-lime-600">Choose Us</span>
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Enjoy the perfect balance of beauty, durability, and low maintenance
          with our premium composite fencing solutions. Crafted to withstand
          the harshest weather while maintaining a rich finish.
        </p>
        <button className="bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full w-fit">
          Explore more
        </button>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-lime-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <p className="mt-4 text-gray-700 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
