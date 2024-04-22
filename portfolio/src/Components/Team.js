import React from 'react'
import Person1 from '../Assets/teama.png'
import Person2 from '../Assets/teamb.png'
import Person3 from '../Assets/teamc.png'
import Person4 from '../Assets/teamd.png'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Team = () => {
  return (
    <div className='bg-[#151616] px-40 py-40'>

      <div className="text-center pb-16">   
        <p className='text-[#5FCBBA] font-bold mb-3'>
          OUR TEAM
        </p>
        <h1 className='text-white text-4xl font-bold'>
          Meet Expert <span className='text-[#5FCBBA]'>Team</span>.
        </h1>
        <div class="border-t-2 border-[#5FCBBA] w-28 mx-auto mt-4 mb-4"></div>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat laudantium! Libero architecto error nesciunt id <br /> animi debitis quidem quas laborum recusandae.
        </p>
      </div>






      <div className="flex flex-wrap">

        <div className="flex w-5/12 bg-[#1f2121] mx-10 my-10">
          <div className="w-96 mr-2">
            <img src={Person1} alt="" />
          </div>
          <div className="px-6 pt-10">
            <h3 className='font-bold text-2xl text-white pb-2'>Devansh Sharma</h3>
            <h4 className='font-bold text-lg text-[#5FCBBA] pb-4'>Designer</h4>
            <p className='text-white text-sm pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex space-x-6 size-full text-[#5FCBBA]">
              <BiLogoFacebookCircle />
              <BiLogoTwitter />
              <BiLogoInstagramAlt />
            </div>
          </div>
        </div>

        <div className="flex w-5/12 bg-[#1f2121] mx-10 my-10">
          <div className="w-96 mr-2">
            <img src={Person2} alt="" />
          </div>
          <div className="px-6 pt-10">
            <h3 className='font-bold text-2xl text-white pb-2'>Ronit Jain</h3>
            <h4 className='font-bold text-lg text-[#5FCBBA] pb-4'>Designer</h4>
            <p className='text-white text-sm pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex space-x-6 size-full text-[#5FCBBA]">
              <BiLogoFacebookCircle />
              <BiLogoTwitter />
              <BiLogoInstagramAlt />
            </div>
          </div>
        </div>

        <div className="flex w-5/12 bg-[#1f2121] mx-10 my-10">
          <div className="w-96 mr-2">
            <img src={Person3} alt="" />
          </div>
          <div className="px-6 pt-10">
            <h3 className='font-bold text-2xl text-white pb-2'>Sarthak Sehgal</h3>
            <h4 className='font-bold text-lg text-[#5FCBBA] pb-4'>Designer</h4>
            <p className='text-white text-sm pb-6'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
            <div className="flex space-x-6 size-full text-[#5FCBBA]">
              <BiLogoFacebookCircle />
              <BiLogoTwitter />
              <BiLogoInstagramAlt />
            </div>
          </div>
        </div>

        <div className="flex w-5/12 bg-[#1f2121] mx-10 my-10">
          <div className="w-96 mr-2">
            <img src={Person4} alt="" />
          </div>
          <div className="px-6 pt-10">
            <h3 className='font-bold text-2xl text-white pb-2'>Sidhhanth</h3>
            <h4 className='font-bold text-lg text-[#5FCBBA] pb-4'>Designer</h4>
            <p className='text-white text-sm pb-6'>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
            <div className="flex space-x-6 size-full text-[#5FCBBA]">
              <BiLogoFacebookCircle />
              <BiLogoTwitter />
              <BiLogoInstagramAlt />
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Team
