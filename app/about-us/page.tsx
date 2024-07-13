"use client";
import React from "react";
import { ScrollAnimation } from "../motion-framer/scrollAnimation";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";

const Page = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <div className="max-w-[1920px] px-[8%] w-full  bg-blue-100">
        <div className="flex justify-center py-[5%] flex-wrap md:flex-nowrap gap-5 ">
          <div className="flex flex-col gap-5 w-full md:w-[50%]">
            <ScrollAnimation>
              <div className="text-3xl font-bold mb-2 text-yellow-500 font-sans ">
                About HealthTrixss
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans max-w-[600px] w-full">
                For more than two decades, we have been at the forefront of
                innovation in the U.S. healthcare industry. Our seasoned
                leadership and strategic expertise have consistently delivered
                impactful results across numerous companies. We specialize in
                Payer Enrollment, Value-Based Payment Reconciliation, Risk and
                Quality Management, and Provider Operations.
                <br />
                <br />
                We can help you gain insights from your vast amounts of
                disparate data to:
                <br />
                <br />
                <ul className="list-disc ml-5">
                  <li>
                    Accurately understand financial and clinical issues
                    affecting your organization.
                  </li>
                  <li>
                    Develop effective strategies to address these challenges and
                    improve outcomes.
                  </li>
                  <li>
                    Ensure quality of care and compliance adherence amidst
                    increasing regulatory demands.
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans max-w-[500px] w-full">
                <ul className="list-disc ml-5">
                  <li className="custom-bullet">
                    4100 ELDORADO PKWY, STE 100-266, MCKINNEY TX 75070
                  </li>
                  <br />
                  <li className="custom-bullet">www.healthtrixss.com</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <img
            src="/images/jamie-street.jpg"
            alt="streetpicss"
            className="w-full md:w-[50%] aspect-video rounded cursor-pointer hover:shadow-lg"
          />
        </div>
        <div className="flex justify-center py-[5%] flex-wrap md:flex-nowrap gap-10 ">
          <img
            src="/images/pic.webp"
            alt="streetpicss"
            className="w-full md:w-[50%] aspect-video rounded cursor-pointer hover:shadow-lg"
          />
          <div className="flex flex-col gap-5 w-full md:w-[50%]">
            <ScrollAnimation>
              <div className="text-3xl mb-2 text-yellow-500 font-sans font-bold">
                Our values and strength
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans max-w-[600px] w-full">
                <br />
                <ul className="list-disc ml-5">
                  <li>Focus on value add and simplicity</li>
                  <li>Continuous Innovation</li>
                  <li>Hybrid SME of Technology and Healthcare business</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
