'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Tabs = () => {

  const pathname = usePathname()
  return (
    <div className="my-28">
      <div className="flex justify-center gap-10 text-4xl  mb-4">
        <Link
          href="/gallery/photo"
          className={`pb-1 transition text-[#3F4919] ${
            pathname.includes("photo")
              ? "border-b-2 border-[#99BA14] text-[#3F4919]"
              : "hover:text-[#99BA14]"
          }`}
        >
          Photo Gallery
        </Link>
        <Link
          href="/gallery/video"
          className={`pb-1 transition text-[#3F4919] ${
            pathname.includes("video")
              ? "border-b-2 border-[#99BA14] text-[#3F4919]"
              : "hover:text-[#99BA14]"
          }`}
        >
          Video Gallery
        </Link>
      </div>
    </div>
  )
}

export default Tabs
