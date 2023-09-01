'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <Link href="./">
        <Image
          src="/images/LOGO_NOVA.png"
          alt="logo"
          width={150}
          height={150}
          className="my-4 mx-4 pb-2 mt-6 md:w-48"
        />
      </Link>
    </nav>
  );
}
