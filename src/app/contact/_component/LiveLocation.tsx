"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function LiveLocation() {
  return (
    <section className="py-12  text-center">
      <h2 className="text-6xl font-extrabold pb-16">
        Our Live <span className="text-[#99BA14]">Location</span>
      </h2>
        <div>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502993847198!2d106.699165775791!3d10.771928889372529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f6d33a4a3%3A0x92ff16c4c1e6d9a!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2sbd!4v1692302490123!5m2!1sen!2sbd"
            width="100%"
            height="813"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  )
}
