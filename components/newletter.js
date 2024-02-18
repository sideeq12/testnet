

const Newsletter = () =>{
    return(
        <div className="text-white text-center
        py-10 py-20 px-10 md:w-1/2 mx-auto">
          <h2 className="text-4xl font-extrabold mb-2 md:mb-10">Newsletter</h2>
          <p className="text-gray-500">Please join our weekly Newsletter</p>

          <form className="mt-10">
            <input type="text" placeholder="Name" required className="bg-black mb-2 text-left w-full border border-gray-500 p-1" />
           <br/>
            <input type="email" placeholder="Email" required  className="bg-black mb-2 w-full text-left border-gray-500 border p-1" /> <br/>
            <button type="submit" className="text-white py-2 px-10
             bg-gradient-to-r from-red-500 to-purple-500 w-full">SUBSCRIBE</button>
          </form>

        </div>
    )
}



export default Newsletter;