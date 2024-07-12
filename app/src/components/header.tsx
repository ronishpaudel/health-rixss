"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="px-[8%] max-w-[1920px] w-full bg-darkVoilet py-8 ">
      <div className="text-gray-100 flex justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/healthTrxs.png"
            alt="header-logo"
            width={250}
            height={50}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center font-sans font-medium text-white"
        >
          <div className="relative cursor-pointer hover:text-gray-200">
            <span className="underline-effect">About</span>
          </div>
          <div className="relative cursor-pointer hover:text-gray-200">
            <span className="underline-effect">Services</span>
          </div>
          <div className="relative cursor-pointer hover:text-gray-200">
            <span className="underline-effect">Our Products</span>
          </div>
          <div className="relative cursor-pointer hover:text-gray-200">
            <span className="underline-effect">Our Team</span>
          </div>
          <div className="relative cursor-pointer hover:text-gray-200">
            <span className="underline-effect">Contact</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { Header };
