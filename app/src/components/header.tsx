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
      <div className="px-[8%] max-w-[1920px] w-full bg-slate-50 py-8 border-b shadow-lg">
        <div className="text-gray-950 flex justify-between items-center w-full">
          <motion.div
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/healthTrxs.png"
              alt="header-logo"
              height={50}
              width={230}
            />
          </motion.div>

          <div className="bg-blue-500 p-1 rounded md:hidden block">
            {!navbar ? (
              <Menu size={23} onClick={onClickSetNavbar} />
            ) : (
              <X size={23} onClick={onClickSetNavbar} />
            )}
          </div>

          <div className="md:block hidden">
            <motion.div className="flex gap-3 items-center font-sans font-medium md:font-semibold text-[16px] md:text-lg text-slate-800">
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/about-us")}
                >
                  About
                </span>
              </div>
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/services")}
                >
                  Services
                </span>
              </div>
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/our-products")}
                >
                  Our Products
                </span>
              </div>
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/our-team")}
                >
                  Our Team
                </span>
              </div>
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/news-letter")}
                >
                  Articles
                </span>
              </div>
              <div className="relative cursor-pointer hover:text-slate-700">
                <span
                  className="underline-effect"
                  onClick={() => router.push("/contact-us")}
                >
                  Contact
                </span>
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
