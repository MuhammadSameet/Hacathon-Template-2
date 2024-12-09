"use client";
import Image from "next/image"
import flex from "../assets/flex img.png"

export default function fleximage(){
    return (
        <>
        

<body className="bg-gray-100">
  <div className="container mx-auto px-6 py-12">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
    
      <div className="flex-1 bg-[#2E2A47] text-white p-8 rounded-lg">
        <h2 className="text-4xl font-semibold mb-4">It started with a small idea</h2>
        <p className="text-lg mb-6">A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
        <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-[#2E2A47] focus:outline-none focus:ring-2 focus:ring-white">
          View collection
        </button>
      </div>

     
      <div className="flex-1">
        <Image src={flex} alt="Interior image" className="w-full h-full object-cover rounded-lg"/>
      </div>
    </div>
  </div>
</body>


        </>
    )
};