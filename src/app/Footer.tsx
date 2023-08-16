import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-[12px]">
      <div className="justify-center items-center mt-10 m-auto flex mx-32 mb-8">
        <p className=" text-red-500">ENZO ABREU. COPYRIGHT</p>
        <span className="flex justify-between mt-2 ">
        <Link href="/">
          <p className=" hover:text-red-500 mx-2">TERMOS</p>
          </Link>
          <Link href="/">
          <p className=" hover:text-red-500 mx-2">PRIVACIDADE</p>
          </Link>
          <Link href="/">
          <p className=" hover:text-red-500 mx-2">CONTATO</p>
          </Link>
          <Link href="/">
          <p className="  bg-red-500 hover:bg-red-900 text-white font-bold rounded px-1 py-1 ml-4 ">BUY NOW</p>
          </Link>
        </span>
      </div>
      <div className="flex space-x-4 items-center justify-center mb-6">
        <Link href="/">
          <span>
            <Image
              src="/images/instagram.svg"
              alt="Instagram Logo"
              width={30}
              height={15}
            />
          </span>
        </Link>
        <Link href="/">
          <span>
            <Image
              src="/images/youtube.svg"
              alt="YouTube Logo"
              width={30}
              height={15}
            />
          </span>
        </Link>
      </div>
    </footer>
  );
}
