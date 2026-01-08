"use client";
import PortfolioCard from "@/components/PortfolioCard";
import { motion } from "motion/react";
import React from "react";

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.15 },
  },
  viewport: { margin: "-50px" },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, easing: "ease-out" },
  },
  viewport: { margin: "-50px" },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen w-screen">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className=" w-full h-40 bg-green-800 p-30 "
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl text-center text-white font-bold pt-5"
        >
          Portfolio
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-sm text-gray-200 font-medium text-center"
        >
          Some of the amazing work I’ve done so far
        </motion.p>
      </motion.div>
      {/* FETCH DATA */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-10 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i}>
            <PortfolioCard image="/images/hand-craft.jpeg" name="Blow" />
          </div>
        ))}
      </div>
      <motion.button
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center mx-auto my-10 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg mb-10 cursor-pointer"
      >
        Get Started
      </motion.button>
    </div>
  );
}
