import Image from "next/image";
export default function Biography() {
  return (
    <section className="flex flex-col md:flex-row mt-10 md:mt-16 mx-6">
      <div className="">
        <p className="font-abc text-red-400 text-[14px] md:text-[19px]">
          BIOGRAPHY
        </p>
        <p className="font-abc text-black text-[42px] md:text-5xl ">
          DAVID LAID
        </p>
        <p className="mt-2 md:mt-6 text-left font-def text-[14px] font-[100] max-w-[440px]">
          6 Years ago I began my fitness journey as a 90 pound frail, lanky,
          near emaciated teen looking to build confidence and become comfortable
          in my own skin. Although my central goal has always been muscular
          development, I quickly fell in love with strength training as an
          integral part of acquiring the physique of my dreams. Physical changes
          don’t occur overnight, but chasing strength became a source of
          constant motivation for me, a goal to strive for day in and day out in
          the gym, a goal which I could see materialize from training session to
          training session.
        </p>
      </div>
      <div className="">
        <Image
          src="/images/guy_gym.png"
          alt="heroimage"
          width={512}
          height={768}
          className=""
        />
      </div>
    </section>
  );
}
