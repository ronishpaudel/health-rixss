"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Map, Mail, Link } from "lucide-react";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";

const DynamicLeafletMapComponent = dynamic(
  () => import("../utils/leafletMap").then((mod) => mod.LeafletMapComponent),
  { ssr: false }
);
interface IEmailContent {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
}
const Page: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //setting button logic
    setButton(!button);
    // Simulate sending email (since no backend is present)
    const emailContent: IEmailContent = {
      firstName,
      lastName,
      email,
      message,
    };

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    // Simulated action: console log the email content
    console.log("Form data:", emailContent);

    // Simulated action: send email (for demonstration)
    sendEmailToCompany(emailContent);
  };

  const sendEmailToCompany = (emailContent: IEmailContent) => {
    // Simulate sending email to company (e.g., via fetch API or other means)
    // This is just a placeholder and should be replaced with actual email sending logic
    console.log("Sending email to company:", emailContent);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1920px] px-[8%] w-full">
        <div className="flex flex-col items-center justify-center py-10 gap-5">
          <div className="text-orange-400 text-3xl font-sans font-bold mt-10">
            Contact Us
          </div>
          <div className="mt-4 font-sans text-base font-semibold">
            Contact us for a quote, help, or to join the team.
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-9 justify-center">
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
          <div className="text-orange-400 text-3xl font-bold py-4 font-sans">
            Mailing Address & Map
          </div>
          <div className="max-w-[200px] w-full border border-orange-400"></div>
          <br />
          <DynamicLeafletMapComponent />
        </div>
        <br />
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleFormSubmit}
        >
          <div className="text-3xl font-bold font-sans">
            Let's get connected !
          </div>
          <div className="text-lg font-bold">
            Name<span className="text-red-500">*</span>
          </div>
          <div className="flex gap-4 justify-between">
            <input
              className="p-4 rounded border border-gray-800 md:w-[50%] w-full"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="p-4 rounded border border-gray-800 md:w-[50%] w-full"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="text-lg font-bold">
            Comment or Message<span className="text-red-500">*</span>
          </div>
          <div className="flex gap-10 justify-between">
            <textarea
              className="pb-20 pr-20 pt-2 pl-4 rounded border border-gray-800 w-full"
              placeholder="Enter Your Messages...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {!button ? (
            <button
              type="submit"
              className="bg-blue-500 text-white rounded max-w-[200px] w-full py-3 px-4 text-sm font-sans mt-4 hover:bg-blue-400 hover:text-slate-900"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white rounded max-w-[200px] w-full py-3 px-4 text-sm font-sans mt-4 hover:bg-blue-400 hover:text-slate-900"
            >
              Submitted
            </button>
          )}
          <br />
        </form>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
