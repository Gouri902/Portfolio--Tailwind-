import React from 'react'
import Navbar from './Navbar'
import AboutImage from '../Assets/About image.png'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";


const About = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <div className="flex space-x-4 mr-40 ml-48 mt-10">
        <div className="h-5/6 w-5/6">
          <img src={AboutImage} alt="" />
        </div>
        <div className="py-28">
          <p className='text-[#5FCBBA] mb-3 font-bold'>
            ABOUT PERSONAL
          </p>
          <h1 className='text-white text-4xl font-bold'>
             Hello, I'm Gouri <br />
             <span className='text-[#5FCBBA] mb-3'>Pundir</span>
          </h1>
          <div class="border-t-2 border-[#5FCBBA] w-28 mt-4 mb-4"></div>
          <p className='text-white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem at aspernatur <br /> blanditiis ad dolore delectus quasi reiciendis! Delectus exercitationem at quidem recusandae porro! Esse laborum vero at sed, exercitationem tempora!
          </p>
          <p className='mt-3 mb-3 text-[#5FCBBA] text-4xl'>
            Gouri Pundir
          </p>
          <div className="flex space-x-6 size-full text-[#5FCBBA]">
            <BiLogoFacebookCircle />
            <BiLogoTwitter />
            <BiLogoInstagramAlt />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
