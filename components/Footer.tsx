import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">BrandName</h1>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-green-400 transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="font-semibold">Social Media</p>
          <div className="flex md:flex-col items-center gap-2  transition">
            <Link
              href={"/"}
              className="flex gap-2 hover:text-green-400 cursor=pointer"
            >
              <Image
                src={"/images/Facebook.svg"}
                width={25}
                height={25}
                alt={"facebook"}
                className="hover:bg-green-400 rounded-full"
              />
              Facebook
            </Link>
            <Link
              href={"/"}
              className="flex gap-2 hover:text-green-400 cursor=pointer"
            >
              <Image
                src={"/images/Instagram.svg"}
                width={25}
                height={25}
                alt={"instagram"}
                className="hover:bg-green-400 rounded-full"
              />
              Instagram
            </Link>
            <Link
              href={"/"}
              className="flex gap-2 hover:text-green-400 cursor=pointer"
            >
              <Image
                src={"/images/Whatsapp.svg"}
                width={25}
                height={25}
                alt={"whatsapp"}
                className="hover:bg-green-400 rounded-full"
              />
              Whatsapp
            </Link>
            <Link
              href={"/"}
              className="flex gap-2 hover:text-green-400 cursor=pointer"
            >
              <Image
                src={"/images/X.svg"}
                width={25}
                height={25}
                alt={"x"}
                className="hover:bg-green-400 rounded-full"
              />
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
