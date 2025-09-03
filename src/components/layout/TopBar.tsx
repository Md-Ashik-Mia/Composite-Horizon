import { Facebook, Instagram, Twitter, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import flag from "@/assets/us-flag.png"
export default function TopBar() {
  return (
    <div className="container mx-auto bg-black text-white text-[32px]  min-h-[80px]   flex justify-between items-center">
      {/* Left: Social Media Icons */}
      <div className="flex items-center justify-center gap-2 ">
        <Link href="https://facebook.com" aria-label="Facebook">
          <Facebook className="w-8 h-8 text-white" />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram">
          <Instagram className="w-8 h-8 text-white" />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter">
          <Twitter className="w-8 h-8 text-white" />
        </Link>
      </div>

      {/* Right: Help and Language */}
      <div className="flex items-center text-[20px] ">
        <span>Need Help? <a href="tel:2075550119" className="hover:underline">(207 555-0119)</a></span>
        <div className="flex items-center  cursor-pointer hover:opacity-80">
          <Image className="rounded-full" src={flag} alt="English" width={30} height={30} />
          <span>English</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
