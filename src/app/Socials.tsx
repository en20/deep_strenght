import Image from "next/image"
import Link from "next/link"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"



export default function Socials() {
    return (
        <section>
            <div className="text-center justify-center m-auto flex">
                <Link href="/">
                <FaYoutube
                className="text-5xl hover:text-red-500 mx-8"/>
                </Link>
                <Link href="/">
                <FaInstagram
                className="text-5xl hover:text-pink-500 mx-8"/>
                </Link>
            </div>
        </section>
    )}
        