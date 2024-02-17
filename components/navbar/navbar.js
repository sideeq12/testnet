"use client"

import "./navStyle.css"
import { Dropdown } from 'flowbite-react'
import { SlSocialFacebook,SlSocialLinkedin, SlSocialYoutube ,  SlSocialInstagram } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Navbar = ()=>{
    return(
        <nav className="">
            <span>Logo</span>

       <div className="list">
       <Dropdown label="Our Company" className="border-none" dismissOnClick={false}>
      <Dropdown.Item className="bg-white text-black pt-3 px-3">About Us</Dropdown.Item>
      <Dropdown.Item className="bg-white text-black pb-3 px-3">Career</Dropdown.Item>
      <Dropdown.Item className="bg-white text-black px-3">Contact</Dropdown.Item>
    </Dropdown>
    <Dropdown label="Services" className="border-none" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
       <ul>
                <li><Link href="#">Our Work</Link></li>
                <li><Link href="#">Our Plans</Link></li>
                <li><Link href="#">Ideas</Link></li>
            </ul>
            
        <span>
        <Link href="">
        <SlSocialFacebook />
        </Link>
        <Link href="">
        <SlSocialLinkedin />
        </Link>
        <Link href="">
        <SlSocialYoutube  />
        </Link>
        <Link href="">
        <SlSocialInstagram  />
        </Link>
        </span>

       </div>
       

       <button className="text-white px-2 md:px-3 py-3 h-fit 
       bg-red-600 border border-red-600 md:border-none flex justify-center align-center gap-2">
         <AiOutlineMail size={24} />   <label className="hidden md:block">SEND A MESSAGE</label>
        </button>
        </nav>


    )
}


export default Navbar;