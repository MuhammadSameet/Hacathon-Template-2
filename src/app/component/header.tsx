
"use client";
import Image from "next/image"
import search from "../assets/search.png"
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"
import profile from "../assets/profile.png"
import Link from "next/link"
import humburger from "../assets/Hamburger.png"


export default function Header(){
    return (
        <>
        <div className="header">
            <div className="header-1">
                <ul>
                    <li><Image className="search" src={search} alt={"search"}/></li>
                </ul>
                <ul>
                <Link href="/"><li><h1><Image className="logo" src={logo} alt={"search"}/></h1></li></Link>
                </ul>
                <ul className="cart-profile">
                <Link href="/collection"><li><Image className="cart" src={cart} alt={"cart"}/></li></Link>
                    <Link href="/about"><li><Image className="profile" src={profile} alt={"profile"}/></li></Link>
                    <label htmlFor="click">
                    <li><Image className="humburger" src={humburger} alt={"humburger"}/></li>
                    </label>
                </ul>
            </div>
                 <input type="checkbox" id="click"></input>
                 <ul className="header-button">
                 
                    <Link href="/collection"><li>Plant pots</li></Link>
                    <Link href="/about"><li>Ceramics</li></Link>
                    <Link href="/payment"><li>Tables</li></Link>
                    <Link href={"/"} ><li>Chairs</li></Link>
                    <Link href="/collection"><li>Crockery</li></Link>
                    <Link href="/about"><li>Tableware</li></Link>
                    <Link href="/payment"><li>Cutlery</li></Link>
                 </ul>
                 
        </div>
        </>
    )
}