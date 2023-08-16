import Image from "next/image"
import Link from "next/link"



export default function Socials() {
    return (
        <div className="flex mt-16 items-center justify-center bg-[#eff1f1]">
            <Link href="/">
            <Image
            src="/images/instagram.svg"
            alt="logo"
            width={200}
            height={150}
            className="max-w-[69px] mx-8 my-16"
            
            
            />
            </Link>
            <Link href="/">
            
             <Image
            src="/images/youtube.svg"
            alt="logo"
            width={200}
            height={150}
            className="  max-w-[69px] mx-8 my-16"
            
            />
            </Link>
        </div>
    )}