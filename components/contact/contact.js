import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import "./contact.css"


const ContactInfo = () =>{
    return(
        <div className="bg-white py-16 md:py-24 px-10 text-black text-center">
        <div className="h-2 w-32 bg-red-500 mx-auto mb-6"></div>
        <h2 className="capitalize text-5xl font-semibold">How can we help ?</h2>
        <div className=" md:flex mx-auto justify-center align-middle gap-8 my-16 half-a-border ">
        <div className="flex flex-col gap-4 justify-center align-middle p-16 shadow-xl">
            <LuPhone size={50} color="red" className="mx-auto" />
            <span className="text-xl font-bold text-gray-800">716-545-8487</span>
        </div>
        <div className=" flex flex-col gap-4 justify-center align-middle p-16 shadow-xl">
            <IoMailOpenOutline size={50} color="red" className="mx-auto" />
            <span className="text-xl font-bold text-gray-800">email@example.com</span>
        </div>
        <div className=" flex flex-col gap-4 justify-center align-middle p-16 shadow-xl">
            <MdOutlineLocationOn size={50} color="red" className="mx-auto" />
            <span className="text-xl font-bold text-gray-800">640 Ellicott St, Buffalo, NY 14203</span>
        </div>
        </div>
      </div>
    )
}

export default ContactInfo;