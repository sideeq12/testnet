import Newsletter from "@/components/newletter";
import { CiUser } from "react-icons/ci";
import { FiClock } from "react-icons/fi";


const Ideas = () =>{
    return(
        <div>
        <div className=" bg-black w-full h-screen flex flex-col justify-center align-center gap-10 pb-10">
        <h1
          className="mt-32 text-5xl px-10 md:text-8xl  mx-auto w-fit text-center md:text-left font-[900] 
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"
        >
           Ideas
        </h1>
        <div className="text-gray-300 mx-auto w-fit">
          Home {"/"} <span className=" text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Ideas</span>
        </div>
      </div>
      <div className="relative  bg-white py-16 text-black md:py-20">
        <div className="h-12 w-2 b bg-red-600 ml-[48%] absolute -top-6"></div>
      <div className="flex flex-wrap justify-center gap-8 align-middle">
        <div className="w-80 md:w-96 h-42 border  bg-secondSign bg-cover bg-center text-white">
       <div className="h-full w-full bg-black text-center pt-32 pb-10 px-6 bg-opacity-20 backdrop-blur-sm 
       hover:bg-red-700 hover:cursor-pointer hover:bg-opacity-20">
       <h3 className="font-semibold mb-3">            
Digital Marketing – Offshoring
    </h3>
      <p className="w-fit border-b pb-5">
      When you are starting a business, or launching a new product.
       You must have heard from many sources about promoting…
      </p>
      <div className="flex gap-2 my-4 justify-center align-bottom">
        <CiUser size={24} />
        <FiClock size={24} />
        4 years
      </div>
       </div>
            </div>
            <div className="w-80 md:w-96 h-42 border  bg-sign bg-cover bg-center text-white">
       <div className="h-full w-full bg-black text-center pt-32 pb-10 px-6 bg-opacity-80 backdrop-blur-sm 
       hover:bg-red-700 hover:cursor-pointer hover:bg-opacity-80">
       <h3 className="font-semibold mb-3">            
Digital Marketing – Offshoring
    </h3>
      <p className="w-fit border-b pb-5">
      When you are starting a business, or launching a new product.
       You must have heard from many sources about promoting…
      </p>
      <div className="flex gap-2 my-4 justify-center align-bottom">
        <CiUser size={24} />
        <FiClock size={24} />
        4 years
      </div>
       </div>
            </div>
            <div className="w-80 md:w-96 h-42 border  bg-sign bg-cover bg-center text-white">
       <div className="h-full w-full bg-black text-center pt-32 pb-10 px-6 bg-opacity-10 backdrop-blur-sm 
       hover:bg-red-700 hover:cursor-pointer hover:bg-opacity-80">
       <h3 className="font-semibold mb-3">            
Digital Marketing – Offshoring
    </h3>
      <p className="w-fit border-b pb-5">
      When you are starting a business, or launching a new product.
       You must have heard from many sources about promoting…
      </p>
      <div className="flex gap-2 my-4 justify-center align-bottom">
        <CiUser size={24} />
        <FiClock size={24} />
        4 years
      </div>
       </div>
            </div>
      </div>
        </div>
        <Newsletter />
        </div>
    )
}

export default Ideas;