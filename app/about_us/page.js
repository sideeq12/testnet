import AboutDetails from "@/components/aboutDetails";

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

        <div className="px-6 md:px-24 pb-20 bg-gray-200">
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
        </div>
    )
}


export default About;