import React from 'react'
import LogoA from '../Assets/logoa.png'
import LogoB from '../Assets/logob.png'
import LogoC from '../Assets/logoc.png'
import LogoD from '../Assets/logod.png'
import LogoE from '../Assets/logoe.png'

const TalkAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#151616] to-[#2c4e48]">
      <div className='flex size-40 justify-between mx-56'>
        <img src={LogoA} alt="" className='mx-8' />
        <img src={LogoB} alt="" className='mx-8' />
        <img src={LogoC} alt="" className='mx-8' />
        <img src={LogoD} alt="" className='mx-8' />
        <img src={LogoE} alt="" className='mx-8' />      
      </div>
    </div>
    
  )
}

export default TalkAction
