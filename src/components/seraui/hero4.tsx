"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import heroImage from '@/assets/heroimage.png'
import Button from "./button";


const SeraUIHero = () => {

  return (
    <div style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }} className="w-full h-[675px]  ">
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold font-[inter] tracking-tight text-[#FFFFFF] dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl mb-6 italic">
              Premium <span className="text-[#C7E44E]">Composite Fences</span> <br /> Delivered to Your Door
            </h1>
            <p className="text-base sm:text-lg text-[#FFFFFF] font-[inter] dark:text-slate-300 max-w-xl md:max-w-3xl mx-auto mb-10">
             Enjoy the perfect balance of beauty, durability, and low maintenance with our premium composite decking solutions. Crafted to withstand the harshest weather while maintaining a rich
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button  className="h-16 w-44 bg-[#94B316] text-white text-2xl  hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700 inline-flex items-center justify-center rounded-4xl  font-medium transition-colors">Shop Now</Button>
              <Button variant="outline" className="h-16 w-56   border border-[#8FAD15] hover:border-0 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-700 inline-flex items-center justify-center rounded-4xl text-2xl text-white  transition-colors">Order Free Samples</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SeraUIHero;
