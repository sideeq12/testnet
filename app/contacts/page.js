import ContactInfo from "@/components/contact/contact";
import Newsletter from "@/components/newletter";




const Contact = () =>{
    return(
        <div>
                 <div className=" bg-black w-full px-6 md:px-32 text-center h-screen flex flex-col justify-center align-center gap-10 pb-10">
        <h1
          className="mt-32 text-5xl md:text-8xl text-center md:w-2/3 mx-auto  font-[900] 
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"
        >
           Let's Get Connected
        </h1>
        <div className="text-gray-500 mx-auto md:w-2/3 text-center">
        If you are considering to partner with a team for getting assistance in accomplishing your
         marketing goals or objectives, we cordially invite you to get in touch with us.
</div>
      </div>
    <ContactInfo />
      <Newsletter />
        </div>
    )
}

export default Contact;