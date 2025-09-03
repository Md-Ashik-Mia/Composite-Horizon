'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

  const navLinks = [
    { href: "/", label: "Home " },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

export default function Navbar() {
  return (
    <header className=" container mx-auto bg-white flex justify-between items-center">
     
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[24px] font-medium text-[#3F4919] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

      <div>
        <Link href="/">
          <Image src="/companylogo.svg" className="mt-3.5" alt="Horizon Composite Logo" width={124} height={92} />
        </Link>
      </div>
        {/* Right Search + Icons */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input placeholder="Search products..." className="rounded-full pl-4 pr-10 w-96 h-[52px] bg-gray-100" />
          <span className="absolute right-7 top-4.5 text-gray-500">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M10,2A8,8 0 0,1 18,10C18,11.85 17.23,13.55 15.94,14.81L21.71,20.58L20.29,22L14.53,16.26C13.27,17.23 11.66,17.84 10,17.84A8,8 0 0,1 2,10A8,8 0 0,1 10,2M10,4A6,6 0 0,0 4,10A6,6 0 0,0 10,16A6,6 0 0,0 16,10A6,6 0 0,0 10,4Z" /></svg>
          </span>
        </div>
        <Button variant="ghost" size="icon" className="bg-lime-100 h-[52px] rounded-4xl w-[52px]">
          <ShoppingCart className="text-lime-600 " />
        </Button>
        <Button variant="ghost" size="icon" className="bg-lime-100 h-[52px] rounded-4xl w-[52px]">
          <User className="text-lime-600" />
        </Button>
      </div>
    </header>
  )
}
