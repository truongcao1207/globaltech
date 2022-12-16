import React from "react";
import icons from "../ultis/icons";
import logo from "../assets/logo.png"
import banner from "../assets/banner.jpeg"
const { FiSearch, AiOutlineDown, BsChevronDown } = icons;
const Header = () => {
  return <div className="flex w-full px-4 pt-4 bg-black bg-opacity-90 cursor-pointer ">
    <div className="w-1/3 pl-2"><img src={logo} alt="" className="w-2/3 pl-4 z-50" /></div>
    <div className="w-2/3 pr-2 flex-col text-while  ">
      <ul className="flex text-sm font-bold p-2 justify-end">
        <li className="px-[6px] "><a href="">REMOTE LOGIN</a></li>
        <li className="px-[6px] "><a href=""></a>CAREERS</li>
        <li className="px-[6px] "><a href=""></a>(800) 484-0195</li>
        <li className="px-[6px] "><a href=""></a>UNDERSTANDING IT</li>
        <div className="px-[6px] "><FiSearch size={16} /></div>
      </ul>
      <ul>
        <ul className="flex text-[9px] font-bold p-2 justify-end">
          <li className="hover:bg-main-100 py-2 rounded-md"><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">HOME </span> <BsChevronDown size={10} /></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">ABOUT US</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">IT SERVICES</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">COMMUNICATIONS</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">LOW VOTAGE</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">BLOG & NEW</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">CONTACT US</span><span><AiOutlineDown size={10} /></span></a></li>
          <li className="hover:bg-main-100 py-2 rounded-md "><a className="flex p-2 rounded-md " href=""><span className="pr-[2px]">SUPPORT</span><span><AiOutlineDown size={10} /></span></a></li>
        </ul>
      </ul>
    </div>
  </div>



};

export default Header;
