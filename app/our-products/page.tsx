"use client";
import React from "react";
import { Footer } from "../src/components/footer";
import { Header } from "../src/components/header";
import ScrollToTopButton from "../src/components/scrollTopButton";
import { ScrollAnimation } from "../motion-framer/scrollAnimation";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1920px] w-full h-[350px] bg-blue-100">
        <ScrollAnimation>
          <div className="text-2xl mb-2 mt-4  px-[8%] text-yellow-500 font-sans font-semibold">
            Our Products
          </div>
        </ScrollAnimation>
        <div className="bg-orange-200 px-[8%] h-[180px] pt-2 mt-2 mb-5">
          <div className="font-sans font-bold text-2xl">Risk Adjustment</div>
          <span>
            We are currently working on Product Roadmap focusing on Risk
            Adjustment Solutions integrated with Artifical intellgence.
          </span>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default page;
