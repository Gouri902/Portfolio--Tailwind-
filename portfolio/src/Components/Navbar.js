import React, { useState } from 'react'
import mainlogo from '../Assets/mainlogo.png'

// import { MailOutlined, UserOutlined } from '@ant-design/icons';

import { Button } from 'antd';

// import { BsCart2 } from "react-icons/bs";




const Navbar = () => {

  // const [openMenu,setOpenMenu] = useState(false)
  // const menuOptions = [
  //   {
  //     text: "About",
  //     // icon: <AboutIcon/>
  //   },
  //   {
  //     text: "Services",
  //     // icon: <ServicesIcon/>
  //   },
  //   {
  //     text: "TalkAction",
  //     // icon: <TalkActionIcon/>
  //   },
  //   {
  //     text: "Team",
  //     // icon: <TeamIcon/>
  //   }
  // ]

  return (
    <nav className='bg-[#151616] text-white flex justify-between'>
      <div className="max-h-28 max-w-28 pt-2 px-3">
        <img src={mainlogo} alt="" />
      </div>
      <div className="flex pt-7 pr-8 space-x-8 justify-items-end">
        <a href="">About</a>
        <a href="">Our Patrons</a>
        <a href="">Our Services</a>
        <a href="">Our Team</a>
        <Button className=" border-0 bg-[#5FCBBA] hover:bg-[#43BBA8] active:bg-[#1D8D7B] focus:ring focus:ring-[#70E8D5] text-white">Click to Contact</Button>
      </div>
      {/* <div className="nav-menu-container">

      </div> */}
    </nav>
  )
}

export default Navbar
