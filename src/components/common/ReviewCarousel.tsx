"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Review {
  name: string;
  role: string;
  review: string;
  image: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Saint Thomas",
    role: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sagittis ornare vitae pellentesque amet est massa. Pharetra interdum non eget amet nisi non. Morbi posuere integer mollis aliquam fermentum odio vitae.",
    image: "/images/user1.jpg", // put in public/images
    rating: 5,
  },
  {
    name: "Mikel Jack",
    role: "Web Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sagittis ornare vitae pellentesque amet est massa. Pharetra interdum non eget amet nisi non. Morbi posuere integer mollis aliquam fermentum odio vitae.",
    image: "/images/user2.jpg",
    rating: 4,
  },
  // Add more reviews if needed
];

export default function ReviewCarousel() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">
        Customer <span className="text-lime-600">Review</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="pb-10"
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col gap-4 h-full">
              {/* Rating */}
              <div className="flex text-yellow-400">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm flex-1">{r.review}</p>

              {/* User */}
              <div className="flex items-center gap-3 mt-2">
                <Image
                  src={r.image}
                  alt={r.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-sm">{r.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
