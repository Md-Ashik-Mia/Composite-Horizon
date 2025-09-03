
import React from 'react'
import { WoodVideo } from './_component/WoodVideo'


const video = () => {
  return (
    <div>
           <div> <WoodVideo title='Brulee-wood Grain' videoUrl='/video1.mp4' posterUrl="/thamnails/video1.jpg" /></div>
           <div> <WoodVideo title='Red Bordeaux-wood Grain' videoUrl='/video1.mp4' posterUrl="/thamnails/video2.jpg" /></div>
           <div className='mb-32'> <WoodVideo title='Caramel-wood Grain' videoUrl='/video1.mp4' posterUrl="/thamnails/video3.jpg" /></div>
    </div>
  )
}

export default video