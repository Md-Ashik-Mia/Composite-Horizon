import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a2304] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="mb-4">
            <img src="/logo-white.png" alt="Logo" className="w-20" />
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Nibh sollicitudin habitasse 
            phasellus amet quam ut eu. Sed nisi auctor nunc ante nam neque.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-lime-600 hover:bg-lime-500 p-2 rounded">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-lime-600 hover:bg-lime-500 p-2 rounded">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-lime-600 hover:bg-lime-500 p-2 rounded">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="font-semibold mb-4">Quick Access</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-lime-500">Home</a></li>
            <li><a href="#" className="hover:text-lime-500">About Us</a></li>
            <li><a href="#" className="hover:text-lime-500">Products</a></li>
            <li><a href="#" className="hover:text-lime-500">Gallery</a></li>
            <li><a href="#" className="hover:text-lime-500">Contact</a></li>
            <li><a href="#" className="hover:text-lime-500">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-lime-500">📍</span>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lime-500">✉️</span>
              willie.jennings@example.com
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lime-500">📞</span>
              (207) 555-0119
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Join Our News Latter</h3>
          <div className="flex flex-col gap-3">
            <Input placeholder="Enter your email" className="bg-lime-900 border-none text-white placeholder:text-gray-400" />
            <Button className="bg-lime-500 hover:bg-lime-600 text-black">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
