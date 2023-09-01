import Navbarv2 from "../Navbarv2";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";
import Benefitswout from "../Benefitswout";
import Footer from "../Footer";
export default function Aboutpage() {
  return (
    <section>
      <div>
        <Navbarv2 />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 md:max-w-[1280px] md:justify-center md:m-auto md:mt-10">
        <div className=" md:h-16 mx-6 mt-10 md:mt-6 items-start justify-start md:justify-center md:items-center  ">
          <h1 className="text-5xl md:text-6xl font-abc md:pl-[565px]">DUP PROGRAM</h1>
        

        
          <Image
            src="/images/davidmobile.webp"
            alt="teste"
            width={335}
            height={416}
            className="mt-4 md:w-[450px] md:mt-[-50px]"
          />
          </div>
        

        <div className="mx-6 mt-6 justify-between md:pl-[565px] md:mt-16 md:text-start font-ghi md:mr-[120px]">
          <p className="text-xl mb-6 font-abc">R$ 100,00</p>
          <p className="mb-4">
            - 9 Week Optimized Daily Undulating Periodization Workout Plan For
            Maximum Size & Strength{" "}
          </p>
          <p className="mb-4">
            - Inbuilt Calculator to Tell You The Exact Weights You Need to Hit
            on Your Compound Movements Every Workout{" "}
          </p>
          <p className="mb-4">
            - eBook Fully Explaining the Science behind Daily Undulating
            Periodization, Along With How to Make Minor Tweaks Depending on Your
            Experience Level{" "}
          </p>
          <p className="mb-4">
            *Program can only be accessed through this website once purchased.
            Simply login using your account information and enjoy your program!*
          </p>
          <p className="mb-4 font-bold">
            By pressing BUY NOW button, you agree with the terms.**
          </p>
          <p className="mb-4">
            **Due to the nature of digital products being immediately accessible
            upon purchasing, NO refunds will be allowed.
          </p>
          <div className="mt-24 justify-center flex items-center align-middle">
            <Link href="/About">
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold rounded px-24 py-4">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Benefitswout />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
