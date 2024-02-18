import Link from "next/link";



const Footer = ()=>{
    return(
     <div className=" text-center py-10 border-t border-gray-500">
           <div className="bg-black text-white grid md:grid-cols-3 px-10  py-10 gap-10 ">
           <div className="md:text-left">
            <h2 className="text-4xl mb-5">Logo</h2>
            <p className="text-gray-500">lorem The innovation center where ideation speed up to implementation</p>
           </div>
           <div className="pb-10">
            <h4 className="text-4xl  mb-5">Get started</h4>
            <ul className="mb-10 text-gray-500">
                <li><Link href="">About</Link></li>
                <li><Link href="">Services</Link></li>
                <li><Link href="">Portfolio</Link></li>
                <li><Link href="">News</Link></li>
                <li><Link href="">Policy</Link></li>
            </ul>

        <Link href="" className="border px-3 py-3 border-red-500">Contact Us</Link>
           </div>
           <div className="md:text-left">
            <h2 className="text-4xl mb-5">Who Are We.</h2>
            <p className="text-gray-500">
    lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
     the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may In </p>
           </div>
        </div>
        <div className="text-gray-500 text-sm">
            copyright @2024. A part of GMT Projects
            <br />
            All rights reserved.
        </div>
     </div>
    )
}


export default Footer;