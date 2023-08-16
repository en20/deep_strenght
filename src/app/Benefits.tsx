import Image from "next/image";
import { GiStrong } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FaDna } from "react-icons/fa";

export default function Benefits() {
  return (
    <section className="bg-[#eff1f1]">
      <h1 className="font-abc text-[#B5BABE] text-center justify-center pt-[54px]">
        THE BENEFITS
      </h1>

      <div className="flex flex-col md:grid md:grid-cols-3 mx-12 mt-10 justify-between items-center md:mx-32">
        <span className="flex mb-10 md:flex-col ml-[-25px] md:pl-16">
          <GiStrong className="text-7xl mr-6 md:ml-[130px]" />
          <span className="flex flex-col md:mt-16 md:ml-[50px] md:mx-8  ">
            <p className="mb-1 font-bold font-ghi md:text-center">
              BESPOKE WORKOUT PLAN
            </p>
            <p className="text-[13px] text-left mr-[-20px] md:text-center text-[#44494d] md:mr-[13px]  ">
              Smart Algorithms and the ideal compound and isolation movements
            </p>
          </span>
        </span>
        <span className="flex mb-10 md:flex-col ml-[-25px]">
          <BsGraphUp className="text-7xl mr-6 md:ml-[176px] " />
          <span className="flex flex-col md:mt-16 md:ml-[50px] md:mx-8  ">
            <p className="mb-1 font-bold font-ghi min-w-[216px] md:text-center">
              HYPERTROPHY VS. STRENGTH
            </p>
            <p className="text-[13px] text-left mr-[-20px] md:text-center text-[#44494d]  ">
              Use the right tool for the job. An expert insight into muscle
              growth.
            </p>
          </span>
        </span>
        <span className="flex mb-10 md:flex-col ml-[-25px] md:pr-16">
          <FaDna className="text-7xl mr-6 md:ml-[140px]" />
          <span className="flex flex-col md:mt-16 md:ml-[50px] md:mx-8 ">
            <p className="mb-1 font-bold font-ghi md:text-center">
              UNDERSTAND DUP
            </p>
            <p className="text-[13px] text-left mr-[-20px] md:text-center text-[#44494d]    ">
              Understand Daily Undulating Periodization and the science behind
              it.
            </p>
          </span>
        </span>
      </div>
      <div className="mt-[10px] items-center justify-center pl-[110px] md:ml-[485px]">
        <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-3 px-10 rounded mb-14">
          BUY NOW
        </button>
      </div>
    </section>
  );
}
