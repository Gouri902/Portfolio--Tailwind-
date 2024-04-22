import React from 'react'
import BrandIdentity from '../Assets/pr.png'
import WebsiteDesign from '../Assets/cross-platform.png'
import UIUX from '../Assets/web-design.png'
import VideoMarketing from '../Assets/video-marketing.png'


const Services = () => {
  return (
    <div className='bg-black px-40 py-40'>

      <div className="text-center pb-10">   
        <p className='text-[#5FCBBA] font-bold mb-3'>
          OUR SERVICES
        </p>
        <h1 className='text-white text-4xl font-bold'>
          What We <span className='text-[#5FCBBA]'>Do</span>.
        </h1>
        <div class="border-t-2 border-[#5FCBBA] w-28 mx-auto mt-4 mb-4"></div>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat laudantium! Libero architecto error nesciunt id animi debitis quidem quas laborum recusandae, esse maiores qui iste incidunt facilis ipsum eveniet.
        </p>
      </div>

      <div className="flex">
        <div class="text-white text-center mx-3 px-10 py-6 bg-gradient-to-b from-black to-[#2c4e48]">
                <img src={BrandIdentity} alt="" className='w-20 mx-auto pb-4'/>
                <h3 className='font-bold text-2xl'>Brand Identity</h3>
                <p>
                    We bring the right people <br /> togther to challenge
                </p>
        </div>

        <div class="text-white text-center mx-4 px-10 py-6 bg-[#151616]">
                <img src={WebsiteDesign} alt="" className='w-20 mx-auto pb-4' />
                <h3 className='font-bold text-2xl'>Website Design</h3>
                <p>
                    We bring the right people <br /> togther to challenge
                </p>
        </div>

        <div class="text-white text-center mx-3 px-10 py-6 bg-gradient-to-b from-black to-[#2c4e48]">
                <img src={UIUX} alt="" className='w-20 mx-auto pb-4' />
                <h3 className='font-bold text-2xl'>UI & UX Design</h3>
                <p>
                    We bring the right people <br /> togther to challenge
                </p>
        </div>

        <div class="text-white text-center mx-4 px-10 py-6 bg-[#151616]">
                <img src={VideoMarketing} alt="" className='w-20 mx-auto pb-4' />
                <h3 className='font-bold text-2xl'>Video Marketing</h3>
                <p>
                    We bring the right people <br /> togther to challenge
                </p>
        </div>
      </div>      
    </div>
  )
}

export default Services
