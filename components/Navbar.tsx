"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navTab = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = usePathname();
  return (
    <div className=" fixed top-0 left-0 flex w-full p-6 space-y-4 items-center justify-between bg-gray-800/70 backdrop-blur-sm z-50">
      <Link href={"/"}>
        <p className="text-white">BrandName</p>
      </Link>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>
          <Menu color="white" />
        </button>
      )}

      {isOpen && (
        <div className="fixed z-50 w-64 h-screen top-0 right-0 bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4  "
          >
            <X />
          </button>
          <div className="flex flex-col w-full mt-10 items-center justify-center ">
            {navTab.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-medium py-5  ${
                  active
                    ? "text-[#034E42]"
                    : "text-[#1D9A7F] hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
