"use client";
import { ScrollAnimation } from "@/app/motion-framer/scrollAnimation";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[1920px] w-full flex justify-between gap-10 px-[8%] py-8 bg-blue-950 text-white md:flex-nowrap flex-wrap">
      <ScrollAnimation>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold font-sans mb-4">
            Get in touch
          </div>
          <div className=" text-[14px] font-sans font-thin mb-5">
            4100 ELDORADO PKWY, STE 100-266, MCKINNEY TX 75070
          </div>
          <div className=" text-[14px] font-sans font-thin cursor-pointer">
            www.healthtrixss.com
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div>
          <Image
            src="/images/healthlogo.png"
            alt="header-logo"
            width={80}
            height={10}
          />
          <div className=" text-[16px]  max-w-[640px] w-full font-sans font-thin">
            For more than two decades, we have been at the forefront of
            innovation in the U.S. healthcare industry. Our seasoned leadership
            and strategic expertise have consistently delivered impactful
            results across numerous companies. We specialize in Payer
            Enrollment, Value-Based Payment Reconciliation, Risk and Quality
            Management, and Provider Operations.
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export { Footer };
