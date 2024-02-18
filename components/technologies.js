import "./scroll.css"
import { FaFigma } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaMagento } from "react-icons/fa6";
import { TbBrandWebflow } from "react-icons/tb";
import { FaWix } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";


const Technologies = ()=>{
    return (
        <div className="relative bg-black text-white text-center  py-10 md:py-20 px-5">
            <div className=" h-10 md:h-20 w-2 bg-red-500 absolute -top-5 md:-top-10 left-[50%]">
            </div>

        <h2 className="text-3xl md:text-5xl ">Our Expertise - Technologies We Work With</h2>
        <div className="">
<div class="flex flex-col m-auto p-auto bg-black">
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar bg-black mt-10"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 bg-black"
        >
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <TbBrandWebflow size={80} className="mx-auto mt-[20%] shadow-md" />
            <span className="text-white text-2xl font-bold">Webflow</span>
          </div>
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <FaFigma size={80} className="mx-auto mt-[20%] shadow-md" />
            <span className="text-white text-2xl font-bold">Figma Design</span>
          </div>
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <FaWordpressSimple size={80} className="mx-auto mt-[20%] shadow-md" />
            
            <span className="text-white text-2xl font-bold">Wordpress</span>
          </div>
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <FaMagento size={80}  color="orange" className="mx-auto mt-[20%] shadow-md" />
            <span className="text-white text-2xl font-bold">Magento</span>
          </div>
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <FaWix size={80} className="mx-auto mt-[20%] shadow-md" />
            <span className="text-white text-2xl font-bold">Wix</span>
          </div>
          <div class="text-center
          transition-shadow duration-300 ease-in-out overflow-hidden rounded-lg bg-black w-64">
            <IoLogoReact size={80} color="orange" className="mx-auto mt-[20%] shadow-md" />
            <span className="text-white text-2xl font-bold">Web Application</span>
          </div>
        </div>
      </div>
</div>

        </div>
        </div>
    )
}
export default Technologies;