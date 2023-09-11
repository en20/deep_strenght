'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {


  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/LOGO_NOVA.png"
          alt="logo"
          width={150}
          height={150}
          className="my-4 mx-4 pb-2"
        />
      </Link>
      
      
      <div
        className="md:mr-8 md:items-end md:justify-end md:text-right md:flex md:space-x-2 text-xs md:text-xl" 
          
        
      >
        <Link
          href="/"
          
          className="hover:text-red-500  transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg font-abc"
        >
          REGISTER
        </Link>
        <Link
          href="/Login"
          
          className="hover:text-red-500  transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg font-abc"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
