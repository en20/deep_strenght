'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    toggleMenu();
    if (isMenuOpen) {
      closeMenu();
    }
  };

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
      <div className="p-4 md:hidden">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={handleMenuClick}
        />
      </div>
      <div
        className={`md:mr-8 md:items-end md:justify-end md:text-right md:flex md:space-x-2 ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="hover:text-red-500  transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg font-abc"
        >
          REGISTER
        </Link>
        <Link
          href="/"
          onClick={closeMenu}
          className="hover:text-red-500  transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg font-abc"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
