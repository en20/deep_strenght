'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const imageUrl =
    windowWidth < 768 ? "/images/new_hero.jpg" : "/images/triceps.png";

  return (
    <section className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0">
        <Image src={imageUrl} alt="heroimage" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute flex flex-col items-center sm:items-end justify-center h-full mb-[242px] md:mt[242px]">
        <p className="font-abc text-white mt-64 md:mt-10">
          STRENGTH & HYPERTROPHY
        </p>
        <h1 className="text-white text-center text-6xl md:text-7xl font-abc">
          DUP PROGRAM
        </h1>
        <div className="mt-4 sm:mt-[38px]">
          <Link href="/About">
          <p className="bg-red-500 hover:bg-red-900 text-white font-bold py-3 px-10 rounded">
            BUY NOW
          </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
