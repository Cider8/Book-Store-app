import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt=""/>
      </div>
      <div className='md:w-1/2 md:full'>
        <h1 className='text-5xl text-2xl font-medium mb-7'>New Releases This week</h1>
        <p className='mb-10'>It's time to update your reading list with the some of the latest and greatest
        release in the literary world. From heart-pumping thrillers to captivating memoirs,
        this week's new releases offer something for everyone</p>

        <button className='btn-primary'>Subscribe</button>
      </div>
        
      
    </div>
  )
}

export default Banner
