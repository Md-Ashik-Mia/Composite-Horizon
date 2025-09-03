import React from 'react'
import SeraUIHero from './_component/hero4'
import WhyHorizonComposite from './_component/Horizon'
import CommitmentSection from './_component/Commitment'
import WhyWeAreBest from './_component/WhyWeAreBest'
import ReviewCarousel from '@/components/common/ReviewCarousel'
import ContactSection from '@/components/common/ContactSection'

const AboutPage= () => {
  return (
    <div>
       <div className=''><SeraUIHero></SeraUIHero></div>
       <div><WhyHorizonComposite></WhyHorizonComposite></div>
       <div><CommitmentSection></CommitmentSection></div>
       <div><WhyWeAreBest></WhyWeAreBest></div>
       <div><ReviewCarousel></ReviewCarousel></div>
       <div><ContactSection></ContactSection></div>
    </div>
  )
}

export default AboutPage