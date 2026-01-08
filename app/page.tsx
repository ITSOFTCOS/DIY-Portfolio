"use client";

import { motion } from "motion/react";
import BlobImage from "@/components/BlobImage";
import PortfolioCard from "@/components/PortfolioCard";
import SkillsCard from "@/components/SkillsCard";
import TestimonialCard from "@/components/TestimonialCard";

// reusable animation patterns
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

const fadeInOnScroll = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, easing: "ease-out" },
  },
  viewport: { margin: "-50px" },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <div className="relative h-screen w-full flex items-center px-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(29,154,147,.5), rgba(3,78,66,.8)),
              url('/images/bg-hero.jpeg') center/cover no-repeat
            `,
          }}
        />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full h-full px-16 justify-between">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-lg text-white space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-5xl font-bold">
              Welcome to Our Platform
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-200">
              Discover amazing features and beautiful designs. Let's get
              started!
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg mb-10"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-1/2 h-64 sm:h-80 md:h-full relative top-50"
          >
            <BlobImage
              src="/images/hand-craft.jpeg"
              width="600px"
              height="600px"
            />
          </motion.div>
        </div>
      </div>

      {/* SKILLS */}
      <motion.section {...fadeInOnScroll} className="mt-12 space-y-3 px-6">
        <h1 className="text-3xl font-bold text-center">How can I help you</h1>
        <p className="text-sm text-center text-gray-500">
          Here are the best ways I can help turn your ideas into reality
        </p>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-10 p-6 bg-white shadow-2xl rounded-2xl"
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}>
              <SkillsCard
                title={i === 3 ? "Branding" : "Design"}
                decription={
                  i === 3
                    ? "Logos, product design, website, and full brand identity."
                    : "Invites, flyers, banners, brochures, book covers and more."
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PORTFOLIO */}
      <motion.section {...fadeInOnScroll} className="mx-10 my-10 rounded-md">
        <h1 className="text-3xl font-bold text-center">Portfolio</h1>
        <p className="text-sm text-center text-gray-500">
          Some of the amazing work I’ve done so far
        </p>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-10 p-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }}>
              <PortfolioCard image="/images/hand-craft.jpeg" name="Blow" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section {...fadeInOnScroll} className="bg-green-700 mt-5 py-10">
        <p className="text-sm text-center uppercase">What people are saying</p>
        <h1 className="text-3xl font-bold text-center text-white">
          Testimonials
        </h1>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-10 p-4"
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}>
              <TestimonialCard
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                image="/images/profile-pic.jpeg"
                name="Nana Marfo"
                title="Software Engineering"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
