"use client";
import React from "react";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";
import { Map, Mail, Link } from "lucide-react";
import { LeafletMapComponent } from "../utils/leafletMap";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1920px] px-[8%] w-full font-sans">
        <div className="flex flex-col items-center justify-center py-10 gap-5">
          <div className="text-orange-400 text-3xl font-sans font-bold mt-10">
            Contact Us
          </div>
          <div className="mt-4 font-sans text-base font-semibold text-center">
            Contact us for a quote, help, or to join the team.
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-9 justify-center mb-4">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div>
                <Map size={35} />
              </div>
              <div className="text-center text-[16px] w-[250px]">
                <span className="text-lg font-semibold">City ST:</span>
                <br />
                4100 ELDORADO PKWY, STE 100-266, MCKINNEY TX 75070
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div>
                <Mail size={35} />
              </div>
              <div className="text-center text-[16px] w-[250px]">
                <span className="text-lg font-semibold">Email:</span>
                <br />
                jaybaker@healthtrixss.com samirrawat@healthtrixss.com
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div>
                <Link size={35} />
              </div>
              <div className="text-center text-[16px] w-[250px]">
                <span className="text-lg font-semibold">Book Appointment:</span>
                <br />
                <a
                  href="https://outlook.office365.com/book/HealthTrixsssLLC@healthtrixss.com/"
                  className="underline text-blue-500"
                >
                  Click here to book an open slot to meet.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-200 w-full flex flex-col justify-center items-center">
          <br />
          <div className="text-orange-400 text-3xl font-bold py-4 font-sans text-center">
            Mailing Address & Map
          </div>
          <div className="max-w-[200px] w-full border border-orange-400 mb-2"></div>
          <div className="text-darkVoilet text-xl font-bold py-4 font-sans text-center">
            4100 ELDORADO PKWY, STE 100-266, MCKINNEY TX 75070
          </div>
          <br />
        </div>
        <LeafletMapComponent />
        <br />
        <form className="flex flex-col gap-4 w-full">
          <div className="text-3xl font-bold font-sans">
            Let's get connected !
          </div>
          <div className="text-lg font-bold">
            Name<span className="text-red-500">*</span>
          </div>
          <div className="flex gap-10 justify-between">
            <input
              className="p-4 rounded border border-gray-800 md:w-[50%] w-full"
              placeholder="firstName"
              type="text"
              required
            />
            <input
              className="p-4 rounded border border-gray-800 md:w-[50%] w-full"
              placeholder="lastName"
              type="text"
              required
            />
          </div>

          <div className="text-lg font-bold">
            Email<span className="text-red-500">*</span>
          </div>
          <div className="flex gap-10 justify-between">
            <input
              className="p-4 rounded border border-gray-800 w-full"
              placeholder="Email"
              type="email"
              required
            />
          </div>

          <div className="text-lg font-bold">
            Comment or Message<span className="text-red-500">*</span>
          </div>
          <div className="flex gap-10 justify-between">
            <textarea
              className="pb-20 pr-20 pt-2 pl-4 rounded border border-gray-800 w-full "
              placeholder="Enter Your Messages...."
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white rounded max-w-[200px] w-full py-3 px-4 text-sm font-sans mt-4 hover:bg-blue-400 hover:text-slate-900"
          >
            Submit
          </button>
          <br />
        </form>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default page;
