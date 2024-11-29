'use client'
import React from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react"
import Link from "next/link";

 const Navbar =() =>{
    const [isMenuOpen, setIsMenuOpen] =useState(false)

    const togleMenue =() =>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <div className="container pt-8 bg-black text-slate-50	" >
            <div className="flex justify-between items-center ">
                <div className="text-xl font-medium"></div>
              
                <ul className="gap-10 lg:gap-16 hidden md:flex">
                    <li className="menuLink">
                        <Link href="/home">Home</Link>
                    </li>
                    <li className="menuLink">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="menuLink">
                        <Link href="/skill">Skills</Link>
                    </li>
                    <li className="menuLink">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="md:hidden" onClick={togleMenue}>
                    {isMenuOpen ? <AiOutlineClose size={30} /> :
                     <AiOutlineMenu size={30} />
                    }
                </div>
            </div>
            {isMenuOpen && (
                <ul className="flex flex-col gap-5 mt-4 md:hidden">
                    <li className="menulink">
                        <Link href="/home" onClick={togleMenue}>Home</Link>
                    </li>
                    <li className="menulink">
                        <Link href="/about" onClick={togleMenue}>About</Link>
                    </li>
                    <li className="menulink">
                        <Link href="/skill" onClick={togleMenue}>Skills</Link>
                    </li>
                    <li className="menulink">
                        <Link href="/contact" onClick={togleMenue}>Contact</Link>
                    </li>
                </ul>
            )}

        </div>
    )
}
 export default Navbar
