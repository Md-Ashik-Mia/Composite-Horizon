"use client";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const path = usePathname();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold">
          {path === "/about" ? (
            <div>
              <span className="text-black">Need</span>{" "}
              <span className="text-lime-600">Any Help</span>
            </div>
          ) : (
             <div>
              <span className="text-lime-600">Contact</span>{" "}
              <span className="text-black">Us</span>
            </div>


          )}
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Have questions or ready to start your project? Get in touch with us
          today— we’re here to help bring your vision to life.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 items-center">
        {/* Left side - contact info */}
        <div className="bg-lime-50 p-8 rounded-lg space-y-6">
          <div className="flex items-start space-x-4">
            <span className="text-lime-600 text-2xl">📍</span>
            <p className="text-gray-700">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-lime-600 text-2xl">✉️</span>
            <p className="text-gray-700">willie.jennings@example.com</p>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-lime-600 text-2xl">📞</span>
            <p className="text-gray-700">(207) 555-0119</p>
          </div>
        </div>

        {/* Right side - form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-6">
            We Are Here! Please Send A Quest
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject (Optional)"
              className="w-full p-3 rounded bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <textarea
              placeholder="Write message"
              rows={4}
              className="w-full p-3 rounded bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
