import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white"  >
      <div  className="w-full h-screen flex flex-col  justify-center align-center gap-10">
        <h1 className="mt-32 text-6xl text-center md:text-left font-[900] md:w-1/ mx-auto text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
          Let's build something together       </h1>
          <p className="mx-auto w-1/2 text-center md:text-left">“Individually, every grain of sand brushing against my hands
             represents a story, an experience, and a block for me to build upon for the next generation.”</p>
      </div>
    </div>
  );
}
