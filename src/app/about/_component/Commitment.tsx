// app/components/CommitmentSection.tsx
import Image from "next/image";
import PuzzleImage from "@/assets/image-9.jpg"; // Replace with your actual image path

export default function CommitmentSection() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-6xl font-extrabold  mb-8 leading-8">
            We are <span className="text-[#94B316] italic">committed</span>
          </h2>
          <p className="text-[20px] text-[#6F706A] mb-10">
            Our mission is to redefine outdoor living through innovative,
            sustainable, and long-lasting fencing solutions that incorporate
            upcycled components. We aim to provide customers with products that
            combine aesthetic appeal, unrivaled durability, and environmental
            responsibility. Guided by quality and driven by customer
            satisfaction, we strive to be the trusted choice for modern fencing.
          </p>
          <p className="text-[20px] text-[#6F706A]">
            Our vision is to revolutionize the way quality and durability are
            delivered in the marketplace. We aim to become a leading force in
            the composite product industry by setting new benchmarks for
            performance, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src={PuzzleImage} // replace with your image path
            alt="Mission and Vision Puzzle"
            width={947}
            height={540}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
