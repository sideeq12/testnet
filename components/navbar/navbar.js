"use client"
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Dropdown } from 'flowbite-react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleResize = () => {
        if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };
    
    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    

  const links = [
    {
      id: 1,
      link: "Our work",
    },
    {
      id: 2,
      link: "Our Plans",
    },
    {
      id: 3,
      link: "Ideas",
    },
  ];

  return (
    <div className="flex 
     items-center w-full h-24 px-4 text-white bg-black fixed z-20 nav">
      <div>
         <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>
     <div className="ml-auto hidden md:flex gap-4">
     <Dropdown label="Company" className="text-black" dismissOnClick={false} inline>
      <Dropdown.Item><Link href="/second">second</Link></Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    <Dropdown label="Services" className="text-black" dismissOnClick={false} inline>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
     </div>
      <ul className="hidden md:flex md:gap-2 lg:gap-4 lg:mr-3">
    
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white
             hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex gap-6 mr-10">
        <SlSocialFacebook />
        <SlSocialYoutube />
        <SlSocialLinkedin />
        <SlSocialInstagram />
      </div>
        <button className="bg-red-700  text-white px-3 lg:px-10 py-3 lg:mr-10 hidden md:flex gap-3"> 
        <HiOutlineMail size={24} />
        <label className="hidden lg:block">SEND MESSAGE</label></button>
        

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden ml-auto"
      >
        {nav ? <FaTimes size={20} color="#000" /> : <FaBars size={20} />}
      </div>
      <button className=" border-2 border-red-700 text-white  p-1 mr-4 block md:hidden gap-3"> 
        <HiOutlineMail size={20} />
        <label className="hidden">SEND MESSAGE</label></button>

      {nav && (
        <div className="w-full flex h-screen bg-white  absolute  top-0 left-0
        flex-col justify-center items-center   text-black">
            <div className="text-4xl">
     <Dropdown label="Company" className="text-black" dismissOnClick={false} inline>
      <Dropdown.Item><Link href="/second">second</Link></Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    <br/>
    <Dropdown label="Services" className="text-black" dismissOnClick={false} inline>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
     </div>

    <ul className="mt-5 -ml-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-10">
        <Link href=""><SlSocialFacebook  size={30}/></Link>
        <SlSocialYoutube size={30}/>
        <SlSocialLinkedin size={30}/>
        <SlSocialInstagram size={30}/>
      </div>
            </div>
    
      )}
    </div>
  );
};

export default Navbar;
