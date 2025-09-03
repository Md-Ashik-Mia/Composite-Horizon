import SeraUIHero from '@/components/common/Hero'
import React from 'react'
import image27 from "@/assets/image-27.jpg"
import ContactSection from './_component/ContactSection'
import LiveLocation from './_component/LiveLocation'

const ContactPage = () => {
  return (
    <div>
        <SeraUIHero heading='Contact Us' highlight='Us' image={image27} paragraph='Please our FAQ for answers to some of the most commonly asked questions'></SeraUIHero>
        <ContactSection></ContactSection>
        <LiveLocation></LiveLocation>
    </div>
  )
}

export default ContactPage