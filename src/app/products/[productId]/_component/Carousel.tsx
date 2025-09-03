"use client"

import image5 from "@/assets/products/image (1).png"
import image2 from "@/assets/products/image (2).png"
import image3 from "@/assets/products/image (3).png"
import image4 from "@/assets/products/image (5).png"
import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import image1 from "../../../../assets/products/image (1).jpg"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
]

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="w-full relative">
      {/* Main Slider */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img className="h-[658px] w-full rounded-2xl object-cover" src={src.src} alt={`Image ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="grid grid-cols-4 gap-2"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img className="rounded-md h-28 w-48 object-cover" src={src.src} alt={`Thumb ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Override Swiper navigation styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color:rgba(148, 179, 22, 0.37); /* yellow-600 with opacity */
          width: 48px;
          height: 48px;
          border-radius: 9999px; /* full circle */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          color: white !important;
        }
      `}</style>
    </div>
  )
}
