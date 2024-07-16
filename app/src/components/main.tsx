"use client";
import { motion } from "framer-motion";
import React from "react";

const Main = () => {
  return (
    <main
      className="relative h-[100vh] flex max-w-[1920px] justify-start items-center w-full text-gray-100 px-[8%] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/data.jpg')" }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full banner-black"></div>

      <div className=" flex flex-col gap-5 mt-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-sans font-bold text-4xl md:text-5xl"
        >
          HealthRixss
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[580px] w-full font-sans text-base md:text-lg"
        >
          Health Rixss, a pioneering force in the U.S. healthcare industry, is a
          trusted partner for organizations seeking actionable insights in the
          evolving landscape of healthcare innovation
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-blue-500 hover:bg-white hover:text-slate-900 rounded font-sans font-medium w-[200px] p-3 mt-4 text-center uppercase text-gray-200"
        >
          Get Started
        </motion.button>
      </div>
    </main>
  );
};

export { Main };
