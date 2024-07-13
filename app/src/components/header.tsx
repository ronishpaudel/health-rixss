"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavBar } from "./navbar";

const Header: React.FC = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState<boolean>(false);

  function onClickSetNavbar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <div className="px-[8%] max-w-[1920px] w-full bg-darkVoilet py-8">
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

          <div className="bg-blue-500 p-1 rounded md:hidden block">
            {!navbar ? (
              <Menu size={25} onClick={onClickSetNavbar} />
            ) : (
              <X onClick={onClickSetNavbar} />
            )}
          </div>

          <div className="md:block hidden">
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
      </div>
      {navbar && (
        <div className="mt-4 md:hidden block max-w-[1920px] w-full text-center ">
          <NavBar />
        </div>
      )}
    </>
  );
};

export { Header };
