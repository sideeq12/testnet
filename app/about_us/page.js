import AboutDetails from "@/components/aboutDetails";
import { SlGraph } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiEye } from "react-icons/pi";
import Image from "next/image";
import Newsletter from "@/components/newletter";


const About = () =>{
    return(
        <div className="">
              <div className=" bg-black w-full px-6 md:px-32 text-center h-screen flex flex-col justify-center align-center gap-10 pb-10">
        <h1
          className="mt-32 text-5xl md:text-8xl text-center md:w-2/3 mx-auto  font-[900] 
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"
        >
           Let's Build Something.
        </h1>
        <div className="text-gray-500 mx-auto md:w-2/3 text-center">
        “Individually, every grain of sand brushing against my hands represents a story, an experience, and a block for me to build upon for the next generation.”
― Raquel Cepeda, Bird of Paradise </div>
      </div>
      <AboutDetails title="About Us"
       firstDetails="is a full-service digital marketing agency located in Buffalo, New York. We are 
       a team of graphic designers, content creators, digital marketers, brand experts and software
        engineers with more than a decade of experience working across various industries. We specialized
         in designing, development, brand identity and digital marketing."
         secondD="We integrate present and evolving digital marketing trends for creating goal-oriented marketing campaigns which are creative, cost-effective, insightful and ROI focused. is a full-service digital marketing agency located in Buffalo, New York. We are a team of graphic designers, content creators, digital marketers, brand experts and software engineers with more than a decade of experience working across various industries.
          We specialized in designing, development, brand identity and digital marketing"
          third="
          We bring together a unique work environment of creative, business and technical minds to accomplish digital marketing goals for smart organizations. We evaluate your brand’s need and develop powerful digital marketing strategies and implementation proficiency to strengthen your digital
           presence, enhanced brand notoriety, influence buying decisions and convert customers to brand advocate.
          If you are considering to partner with a team for getting assistance in accomplishing your marketing goals or objectives, we cordially "
          />

        <div className="px-6 md:px-24 pb-20 bg-gray-100 text-black">
            <h3 className="font-semibold text-lg mb-10 capitalize">What problem are we solving</h3>
            <p className="mb-10">
            Every organization is unique with a different set of challenges they face in today’s competitive business environment. Staying in line with the latest digital marketing trends is one of the most essential elements of an overall marketing strategy. Many times enterprises 
            lack the expertise to achieve their desired business goals through digital marketing initiatives.
            </p>
            <p className="mb-10">WNYONE team solve this challenge by onboarding as
                 a virtual digital marketing officer making it very easier
                  for businesses to analyse, devise, and execute digital marketing strategies.
</p>
<h3 className="font-semibold text-lg mb-10 capitalize">How we solve the problems</h3>
            <p className="mb-10">
            Every organization is unique with a different set of challenges they face in today’s competitive business environment. Staying in line with the latest digital marketing trends is one of the most essential elements of an overall marketing strategy. Many times enterprises 
            lack the expertise to achieve their desired business goals through digital marketing initiatives.
            </p>
            <p>WNYONE team solve this challenge by onboarding as
                 a virtual digital marketing officer making it very easier
                  for businesses to analyse, devise, and execute digital marketing strategies.
</p>
        </div>
        <div className="bg-gray-100 text-black px-10 md:px-24">
        <div className="md:mb-10">
        <div  className="h-2 w-20 bg-gradient-to-r from-red-500 to-purple-500"></div>
        <h4 className="capitalize text-3xl md:text-6xl font-semibold my-3">Why choose us</h4>
        </div>
        <div className="">
        <div  className="h-2 w-20 bg-gradient-to-r from-red-500 to-purple-500"></div>
        <h4 className="capitalize text-3xl md:text-5xl font-semibold my-3">Features</h4>
        </div>
        <div className="grid md:grid-cols-4 py-6 md:py-20 px-4 md:px-10 text-black gap-4">
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <SlGraph size={40} color="red" className="mx-auto"/>
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <CiHeart size={40} color="red" className="mx-auto"/>
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <SlCalender size={40} color="red" className="mx-auto"/>
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <PiEye size={30} color="red" className="mx-auto"/>
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
        </div>
        </div>
        <div className="grid md:grid-cols-3 w-screen px-4 md:px-10 py-16 md:py-24 bg-black gap-4">
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 height="40" width="100" className="mx-auto border rounded-full" />
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                
                <h4 className="font-semibold text-md my-5">A little details</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 height="40" width="100" className="mx-auto border rounded-full" />
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                
                <h4 className="font-semibold text-md my-5">A little details</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
            <div className="border p-10 text-center bg-white drop-shadow-lg">
                <Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 height="40" width="100" className="mx-auto border rounded-full" />
                <h4 className="font-semibold text-lg my-5">We are Goal Oriented</h4>
                
                <h4 className="font-semibold text-md my-5">A little details</h4>
                <p>
                We are on listening mode during our preliminary meets, with an
                 objective in understanding your marketing
                 challenges. This empowers us to devise a strategy with defined goals and timeline.
                </p>
            </div>
        
        </div>
        <Newsletter />
        </div>
    )
}


export default About;