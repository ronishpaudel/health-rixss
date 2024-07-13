"use client";
import React, { useState } from "react";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";

const teamMembers = [
  {
    imageSrc: "/images/batman.png",
    name: "Jay Baker - CEO",
    description: `Jay is a strategic leader in healthcare with deep 
    expertise in Medicare Advantage, ACA, and Medicaid. 
    His roles at EDIFECS, Advantmed, and Optum have been 
    pivotal in advancing HEDIS and Risk Adjustment Analytics.
     A veteran with an entrepreneurial and consulting background,
      Jay’s career is marked by a steadfast dedication to innovation and excellence.`,
  },
  {
    imageSrc: "/images/batman.png",
    name: "Samir Rawat - CTO",
    description: `Samir is the CTO at HealthTrixss with over 17 years 
    of healthcare IT and Data Analytics experience across various 
     health plans, medical groups, and vendor companies. He specializes in managed care finance, 
     risk adjustment, and developing technology solutions that improve operational efficiency and
      healthcare outcomes. His leadership is focused on advancing healthcare systems through
       innovative technological integrations.`,
  },
  {
    imageSrc: "/images/batman.png",
    name: "Dr. Scott Howell, M.D., MPH & TM, CPE – Clinical Advisor",
    description: `Dr. Howell, a seasoned physician leader with over 30 years of experience in healthcare,
     has expertise in risk adjustment, quality performance, and clinical consulting across various sectors.
      He held executive positions at Heritage Provider Network and Optum Insight, overseeing national 
      population health initiatives. As regional chief medical officer at Americhoice, Inc., 
      he focused on Medicaid and Dual SNPs populations. Dr. Howell’s career highlights include
       serving as medical director for Managed Care at the AIDS Healthcare Foundation and leading 
       international consulting efforts. With board certifications in multiple specialties and master’s 
       degrees in Economics, Public Health, and Business Administration, he’s recognized as a Certified
     Physician Executive.

`,
  },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1920px] px-[8%] w-full bg-blue-100 py-4">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">Our Team</h2>
        <div className="flex lg:flex-nowrap flex-wrap justify-center  gap-[4rem] py-4 pb-5">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Page;

interface TeamCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden w-full md:w-[400px] flex flex-col font-sans">
      <img
        src={imageSrc}
        alt={name}
        className="p-2 w-full h-[280px] object-cover object-center rounded-[10px] bg-lightgray bg-cover bg-no-repeat"
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-700 mt-2">
            {isExpanded ? description : `${description.slice(0, 120)}...`}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleExpanded}
            >
              {isExpanded ? " Show less" : " See more"}
            </span>
          </p>
        </div>
        <button className="bg-blue-500 text-white rounded-full py-3 px-4 text-sm font-sans mt-4 hover:bg-blue-400 hover:text-slate-900">
          Contact
        </button>
      </div>
    </div>
  );
};
