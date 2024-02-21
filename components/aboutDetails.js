


const AboutDetails = ({  title, firstDetails, secondD, third }) =>{
    return(
        <div className="px-6 md:px-24  py-16 md:py-24 bg-gray-200">
            <div className="h-2 w-28 bg-gradient-to-r from-red-500 to-purple-500">
            </div>
            <h3 className="text-5xl my-8 font-semibold">{title}</h3>
            <p  className="mb-4"> {firstDetails} </p>
            <p  className="mb-4"> {secondD} </p>
            <p  className="mb-4"> {third} </p>
            <p  className="mb-4"> {firstDetails} </p>
            </div>
    )
}


export default AboutDetails;