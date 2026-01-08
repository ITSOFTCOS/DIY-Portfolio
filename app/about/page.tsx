"use client";
import { motion } from "motion/react";
import Image from "next/image";
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

export default function About() {
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
          About me
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm text-gray-200 font-medium text-center max-w-2xl mx-auto"
        >
          I'd have loved to tell you more about me, but the space provided isn't
          enough—so here are a few words. Want to know more? Feel free to hit me
          up!
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
        <motion.div variants={fadeUp}>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quaerat, praesentium est reiciendis fuga neque aliquid
            iusto id nulla quidem dignissimos quis vel repellendus at itaque aut
            doloribus alias excepturi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus quaerat, praesentium est reiciendis
            fuga neque aliquid iusto id nulla quidem dignissimos quis vel
            repellendus at itaque aut doloribus alias excepturi! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat,
            praesentium est reiciendis fuga neque aliquid iusto id nulla quidem
            dignissimos quis vel repellendus at itaque aut doloribus alias
            excepturi!
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-150 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/profile-pic.jpeg"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
