import Link from "next/link";
import Image from "next/image";
import { GiFastArrow } from "react-icons/gi";
import { MdOutlineLabelImportant } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";

import { CgMenuGridR } from "react-icons/cg";
import Newsletter from "@/components/newletter";
import Technologies from "@/components/technologies";
import Testimonial from "@/components/testimonial";
import Articles from "@/components/articles";

export default function Home() {
  return (
     <div className="overflow-x:hidden">
       <div  className="w-full h-screen flex flex-col text-white  justify-center align-center gap-10 pb-10">
        <h1 className="mt-32 text-6xl text-center md:text-left font-[900] md:w-1/ mx-auto
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
         Connecting Business. </h1>
          <p className="mx-auto w-1/2 text-center">“Individually, every grain of sand brushing against my hands
             represents a story, an experience, and a block for me to build upon for the next generation.”</p>
      </div>
      <div className="w-full h-fit grid md:grid-cols-2 py-16 md:py-20  bg-white text-black ">
        <div className="w-3/4 text-center md:text-left mx-auto">
        <h2 className="text-2xl md:text-5xl font-[900] text-red-600"> About Us</h2>
        <p className="mt-5 md:mt-10">lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        
        <p className="mt-5 md:mt-10">lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        
        <p className="mt-5 md:mt-10">lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.</p>
        </div>
        <div className="pl-5 md:pl-1 ">
          <Image src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
          width="400" height="400" className="hidden md:block" alt="image"/>
               <Image src="https://images.unsplash.com/photo-1573511860302-28c524319d2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
          width="400" height="400" className="my-10" alt="image"/>
          
        </div>

      </div>
      <div className="text-white h-fit md:flex py-16 px-10 md:px-20 md:py-20">
        <div className="md:w-3/4">
    <h2 className="text-6xl text-center md:text-left font-[900] mb-10
     text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Our Services</h2>
    <p className="text-gray-500 text-center md:text-left">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.
    </p>
        </div>
       <div className="mt-10 mx-auto md:mt-auto md:ml-10 w-fit">
       <Link href="" className="text-white px-4 md:px-10 py-3  flex w-fit gap-2
       md:px-10 py-5 bg-gradient-to-r from-red-500 to-purple-500">
        <CgMenuGridR size={24}/>
         <label> VIEW ALL</label>
        </Link>
       </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 py-16 md:py-20 md:gap-10 px-10 md:px-20">
    <div className="bg-gray-900 rounded-sm group text-center p-10  
     hover:bg-gradient-to-r from-red-500 to-purple-500 group ">
      
      <GiFastArrow  size={24} className="mx-auto my-5" color="red"/>
    <h4 className="text-white text-2xl mb-5">Creativity</h4>
    <p className="text-gray-500 group-hover:text-white">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.lorem In 
    </p>
    </div>
    <div className="bg-gray-900 rounded-sm group text-center p-10  hover:bg-gradient-to-r from-red-500 to-purple-500 group ">
    <MdOutlineLabelImportant  size={24} className="mx-auto my-5" color="red"/>
    <h4 className="text-white text-2xl mb-5">Creativity</h4>
    <p className="text-gray-500 group-hover:text-white">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.lorem In 
    </p>
    </div>
    <div className="bg-gray-900 rounded-sm group text-center p-10  hover:bg-gradient-to-r from-red-500 to-purple-500 group ">
    <HiOutlineLightBulb  size={24} className="mx-auto my-5" color="red"/>
    <h4 className="text-white text-2xl mb-5">Creativity</h4>
    <p className="text-gray-500 group-hover:text-white">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.lorem In 
    </p>
    </div>
    <div className="bg-gray-900 rounded-sm group text-center p-10  hover:bg-gradient-to-r from-red-500 to-purple-500 group ">
    <VscTools  size={24} className="mx-auto my-5" color="red"/>
    <h4 className="text-white text-2xl mb-5">Creativity</h4>
    <p className="text-gray-500 group-hover:text-white">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.lorem In 
    </p>
    </div>
      </div>
      <div className="bg-white text-black relative py-20 px-10 md:px-20">
    <div className="h-16 w-2 md:w-3 bg-red-700 absolute -top-8  right-[50%] "></div>
    <h2 className="text-4xl mx-auto text-center  md:text-left font-extrabold mb-10">
      Our Works
    </h2>
 <div className=" text-center md:text-right">
 <Link href="" className="px-4 md:px-10 py-4 flex w-fit gap-2
  mx-auto md:ml-auto bg-gradient-to-r from-red-500 
    to-purple-500">
 <CgMenuGridR size={24}/>
         <label> VIEW ALL</label></Link>
    </div> 
    <div className="grid md:grid-cols-2  md:px-20 py-10 gap-4 md:gap-12">
    <div className="border bg-black text-white text-center px-5 py-5 md:py-10">
      <h3 className="text-2xl font-extrabold mb-2">Video Creatives</h3>
      <p className="text-gray-500">Make an impact with your AUDIENCE</p>
    <Image className="mx-auto mt-3" src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     width="300" height="400" alt="image details"/> 
    </div>
    <div className="border bg-black text-white text-center px-5 py-5 md:py-10">
      <h3 className="text-2xl font-extrabold mb-2">Video Creatives</h3>
      <p className="text-gray-500">Make an impact with your AUDIENCE</p>
    <Image className="mx-auto mt-3" src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     width="300" height="400" alt="image details"/> 
    </div>
    </div>
     </div>
     <Technologies />
     <Testimonial />
     {/* <Articles /> */}
     <Newsletter />
     </div>
  );
}
