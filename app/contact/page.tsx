"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
  viewport: { margin: "-50px" },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      easing: "ease-out",
    },
  },
  viewport: { margin: "-50px" },
};

export default function Contact() {
  return (
    <div className="min-h-screen w-full">
      {/* HEADER */}
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="w-full h-40 bg-green-800 flex flex-col justify-center px-6 py-30"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl text-center text-white font-bold pt-10 uppercase"
        >
          Contact Me
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm text-gray-200 font-medium text-center max-w-2xl mx-auto"
        >
          I'd love to work and stay in touch with you, feel free to contact me
          using any of the following medium, looking forward to hearing from
          you!
        </motion.p>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-16"
      >
        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-150 rounded-xl overflow-hidden shadow-lg p-6"
        >
          <form className="flex flex-col p-6">
            <p className="text-center text-gray-500 text-sm">
              I would love to here from you
            </p>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-10 p-3 bg-gray-100"
            />
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="w-full mt-10 p-3 bg-gray-100"
            />

            <textarea
              name=""
              id=""
              className="w-full mt-10 p-3 bg-gray-100 max-h-40 "
            ></textarea>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center mx-auto my-10 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg mb-10 cursor-pointer"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-150 rounded-xl overflow-hidden shadow-lg"
        >
          {/* SOCIAL MEDIA */}

          <div className="flex flex-col items-center justify-between space-y-8 pt-10 transition">
            <p className="text-xl text-center font-semibold mt-10">
              Social Media{" "}
            </p>
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
              Facebook <br />
              Faceboo.com
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
              Instagram <br />
              Instagram.com
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
              Whatsapp <br /> +233 541662666
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
              X <br /> @brand.com
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
