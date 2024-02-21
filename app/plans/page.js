
import Newsletter from "@/components/newletter";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SlDiamond } from "react-icons/sl";


const Second = () => {
  return (
    <div>
      <div className="bg-black w-full h-screen flex flex-col justify-center align-center gap-10 pb-10">
        <h1
          className="mt-32 text-5xl px-10 md:text-8xl text-center md:text-left font-[900]  md:w-1/2 mx-auto
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"
        >
          Let's Build Something Together.
        </h1>
      </div>
      <div className="w-screen py-10 md:py-20 bg-white text-center">
        <h2 className="capitalize font-semibold text-5xl mb-6 md:text-6xl">What are you interest in ?</h2>
        <div className="flex flex-col pl-10 md:flex-row w-fit  mx-auto my-6 gap-8">
          <div className="h-fit  px-6 py-4 w-80 md:w-96  hover:cursor-pointer group shadow-lg
           hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-white ">
            <SlDiamond size={40} color="red" className="mx-auto my-6"/>
            <h3 className="font-semibold  border-b-2 py-4 mb-6 text-2xl">Creative Designs (CD)</h3>
            <div className="flex justify-between py-3 border-b"><span>Creative Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 border-b"><span>Creative Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 text-start border-b gap-2"><span>Best digital Marketting agency</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 border-b text-start gap-2"><span>Dedicated Account Manager, Defined SLA's
 Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex gap-2 justify-center align-middle bg-gradient-to-r from-red-500 w-fit my-4 to-purple-500 py-3 px-6 text-white mx-auto">
    <IoArrowForwardCircleOutline size={24} />
    <span>CHOOSE PLAN</span>
          </div>
        </div>
        <div className="h-fit px-6 py-4 w-80 md:w-96  hover:cursor-pointer group shadow-lg
           hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-white ">
            <SlDiamond size={40} color="red" className="mx-auto my-6"/>
            <h3 className="font-semibold  border-b-2 py-4 mb-6 text-2xl">Creative Designs (CD)</h3>
            <div className="flex justify-between py-3 border-b"><span>Creative Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 border-b"><span>Creative Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 text-start border-b gap-2"><span>Best digital Marketting agency</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex justify-between py-3 border-b text-start gap-2"><span>Dedicated Account Manager, Defined SLA's
 Images</span>
        <IoCheckmarkCircleOutline />
            </div>
            <div className="flex gap-2 justify-center align-middle bg-gradient-to-r from-red-500 w-fit my-4 to-purple-500 py-3 px-6 text-white mx-auto">
    <IoArrowForwardCircleOutline size={24} />
    <span>CHOOSE PLAN</span>
          </div>
        </div>
     
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Second;

