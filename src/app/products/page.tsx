import SeraUIHero from '@/components/common/Hero'
import React from 'react'
import image10 from "@/assets/image-10.jpg"
import ProductGrid from './_components/ProductGrid'

const ProductPage = () => {
  return (
    <div>
        <div className='mb-28'><SeraUIHero heading='Fencing List' highlight='List' image={image10} paragraph="Our horizontal, double-sided fence system was specifically designed to be the last fence you'll ever need. It provides the strength and endurance of aluminum with the durability and low Our horizontal, double-sided fence system was specifically designed to be the last fence you'll eve"  ></SeraUIHero></div>
        <div className='container mx-auto'><ProductGrid></ProductGrid></div>
        <div className='container mx-auto'><ProductGrid></ProductGrid></div>
        <div className='container mx-auto'><ProductGrid></ProductGrid></div>
    </div>
    
  )
}

export default ProductPage