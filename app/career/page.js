import Newsletter from "@/components/newletter";
import Image from "next/image";


const Career = () =>{
    return(
        <div>
                  <div className=" bg-black w-full px-6 md:px-32 text-center h-screen flex flex-col justify-center align-center gap-10 pb-10">
        <h1
          className="mt-32 text-5xl md:text-8xl text-center md:w-2/3 mx-auto  font-[900] 
         text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500"
        >
        	Career
        </h1>
        <div className="text-gray-500 text-xl mx-auto w-2/3 text-center">
     “Choose a job you love, and you will never have to work a day in your life.”  <br/>
—Confucius</div>
      </div>

      <div className="flex flex-col md:flex-row gap-6  bg-gray-900 py-10">
        <Image src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="300" height="100" className=" md:w-2/5 mx-10" />
        <div className="md:w-1/2 px-6 md:pr-16 text-gray-500 pb-20">
            <div className="h-2 w-32 mt-8 bg-gradient-to-r from-red-500 to-purple-500"></div>
                <h2 className="text-4xl font-semibold capitalize my-8 text-white">Work with us</h2>
                <p>While you are working your hardest on opportunities that will define your career, WNYONE makes sure your environment provides for you. On day one, you’re indoctrinated into our family with a welcome kit. Soon after, we brand you as one of our own. Day-to-day, you’ll enjoy a bright, open layout, killer views, and unconditional happiness.
                     You will do your best work, and you will work your hardest … and there will be plenty to celebrate.</p>
      <p className="my-8">We’re a bunch of people who embody the united spirit of our motto, ‘Hustle. Team. Adventure.’ We’re filled with an insatiable need to explore, to grow, to conquer, to constantly prove we’re the best. And now, being a 
        Carrot also means being a part of VICE, which offers its breed of excitement and exclusive opportunities.</p>
      </div>
      </div>
      <Newsletter />
            </div>
    )
}


export default Career;