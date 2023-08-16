import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-[12px]">
      <div className="justify-center items-center mt-10">
        <p className="ml-[120px] mb-4 md:ml-[610px] text-red-500 md:mb-6">ENZO ABREU. COPYRIGHT</p>
        <span className="flex justify-between mb-6 mx-10 md:mx-64">
        <Link href="/">
          <p className="mb-2 mx-2 md:mx-0 hover:text-red-500">TERMOS</p>
          </Link>
          <Link href="/">
          <p className="mb-2 mx-2 hover:text-red-500">PRIVACIDADE</p>
          </Link>
          <Link href="/">
          <p className="mb-2 mx-2 hover:text-red-500">CONTATO</p>
          </Link>
          <Link href="/">
          <p className="mb-2 mx-2 hover:text-red-500">BUY NOW</p>
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
