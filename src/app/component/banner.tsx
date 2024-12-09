"use client";
import Image from "next/image"
import banner from "../assets/banner.png"


export default function Banner(){
    return (
          <>
          <ul className="banner">
            <li className="banner-img"><Image src={banner} alt={"banner"}/></li>
          </ul>
          </>
    )
}