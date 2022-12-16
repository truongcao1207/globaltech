import React from 'react'
import logo3 from "../assets/logo-3.png"
import icons from "../ultis/icons"

const { AiFillLinkedin,
  FaTwitterSquare,
  AiFillFacebook,
  FaInstagramSquare } = icons
const Footer = () => {
  return (
    <div className='flex justify-between bg-black text-while px-8'>
      <div className='flex pt-3'>
        <img src={logo3} alt="" />
        <div className='p-4'>Copyright 2022 <strong>Global Tech Solutions.</strong> All Rights Reserved.</div>
      </div>
      <div className='flex pt-4 '>
        <div className='p-3'>GET SOCIAL</div>
        {/* <ul> */}
        <a href=""><AiFillLinkedin size={40} /></a>
        <a href=""><FaTwitterSquare size={40} /></a>
        <a href=""><AiFillFacebook size={40} /></a>
        <a href=""><FaInstagramSquare size={40} /></a>
        {/* </ul> */}
      </div>
    </div>
  )
}

export default Footer