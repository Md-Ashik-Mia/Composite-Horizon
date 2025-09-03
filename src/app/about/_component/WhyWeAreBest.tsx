// app/components/WhyWeAreBest.tsx
import Button from "@/components/seraui/button";
import { TreePine, Sun, Leaf, Shield } from "lucide-react";

export default function WhyWeAreBest() {
  const features = [
    {
      icon: <TreePine className="w-10 h-10 text-lime-600" />,
      text: "Never paint, stain, seal",
    },
    {
      icon: <Sun className="w-10 h-10 text-lime-600" />,
      text: "Fade & stain resistant with 20 year limited warranty",
    },
    {
      icon: <Leaf className="w-10 h-10 text-lime-600" />,
      text: "Product made of 60% wood powder, 34% plastic(10% vergine plastic for Cap) 6% additives & recycled materials",
    },
    {
      icon: <Shield className="w-10 h-10 text-lime-600" />,
      text: "More durable than other composite boards",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-12 ">
      <div className="text-center mb-8">
        <h2 className="text-[#3F4919] text-6xl font-extrabold">
          Why <span className="text-[#94B316] italic">we are best</span>
        </h2>
        <p className="mt-8 text-center text-2xl leading-8 text-gray-700 max-w-3xl mx-auto">
          We are ensuring premium materials and a deep commitment to customer satisfaction.
          Our focus on quality, durability, aesthetic appeal and innovation ensures products
          that stand the test of time making us the trusted choice for those who demand the best.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#94B3161A] p-6 rounded-lg flex flex-col justify-center items-center text-center shadow-sm h-72 w-96"
          >
            <span className="w-16 h-16 font-bold">{feature.icon}</span>
            <p className="mt-4 font-semibold text-2xl leading-8 text-[#3F4919]">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
       <Button className="bg-[#94B316] text-[#ffffff] text-2xl leading-7 rounded-4xl w-72 h-16">Explore Products</Button>
      </div>
    </section>
  );
}
