"use client"
import Image from "next/image"
import React from 'react';
import about1img from "../assets/about1img.png"
import about2img from "../assets/about2img.png"
import Bannercard from "./bannercard";
import Emailbox from "./emailbox";

     const Aboutme = () => {
       return (
         <>
         <div className="bg-white py-8">
           <div className="container mx-auto  text-center text-gray-700">
             <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
               A brand built on the love of craftsmanship, quality and outstanding customer service
             </p>
           </div>
         </div>
     
         <div className="h-screen flex flex-row-reverse">
            <div className="w-1/2 bg-gray-100 ">
              <Image src={about1img} alt="Living Room Image" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-20">
              <h2 className="text-3xl font-bold mb-4">From a studio in London to a global brand with
              over 400 outlets</h2>
              <p className="text-lg mb-4">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
              <p className="text-lg mb-4">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
              <button className="bg-gray-100 my-40 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">Get in touch</button>
            </div>
          </div>
          <div className="h-screen flex">
            <div className="w-1/2 bg-gray-100 ">
              <Image src={about2img} alt="Living Room Image" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 p-20">
              <h2 className="text-3xl font-bold mb-4">Our service isnt just personal, its actually hyper personally exquisite</h2>
              <p className="text-lg mb-4">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
              <p className="text-lg mb-4">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
              <button className="bg-gray-100 my-40 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">Get in touch</button>
            </div>
          </div>
          <Bannercard/>
          <Emailbox/>
          </>
              );
            };
          
          export default Aboutme;