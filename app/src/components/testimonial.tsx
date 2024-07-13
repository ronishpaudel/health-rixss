"use client";
import { container } from "@/app/motion-framer";
import { motion } from "framer-motion";
import React from "react";
import Card from "./card";
import {
  Airplay,
  AlignHorizontalDistributeCenter,
  Cross,
  Database,
  Headphones,
  SquareActivity,
} from "lucide-react";

const Testimonials = () => {
  return (
    <div className="px-[8%] max-w-[1920px] w-full py-[4%] bg-blue-50 flex flex-col gap-10 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-sans font-bold py-4 flex mb-5 justify-center max-w-[640px] text-darkVoilet w-full text-center"
      >
        Choose HealthRixss for a journey of innovation, collaboration, and
        success, transforming healthcare and beyond.
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center gap-5"
      >
        <Card
          title={"Innovative Healthcare Solutions"}
          description={`Pioneering two decades of transformative healthcare innovations, Health Trixss leads with 
            seasoned leadership and strategic expertise across the U.S. healthcare landscape.`}
          icon={<Cross size={40} />}
        />
        <Card
          title={"Insightful Data Analytics"}
          description={`Harnessing vast data to uncover financial
             and clinical insights, enabling effective strategies 
             for improved outcomes and compliance.`}
          icon={<Database size={40} />}
        />
        <Card
          title={"Dedicated to Excellence"}
          description={`Commitment to quality care and compliance 
            amidst evolving regulatory demands, ensuring organizational
             integrity and patient well-being.`}
          icon={<AlignHorizontalDistributeCenter size={40} />}
        />
        <Card
          title={"Specialized Services"}
          description={`Expertise in Payer Enrollment, Value-Based Payment
             Reconciliation, Risk and Quality Management, and
             Provider Operations, ensuring precise insights and strategic solutions.`}
          icon={<SquareActivity size={40} />}
        />
        <Card
          title={"Data-Driven Insights"}
          description={`Harnessing extensive data analytics, Health Trixss offers deep insights into financial 
            and clinical issues, empowering organizations to develop effective strategies and enhance outcomes.`}
          icon={<Airplay size={40} />}
        />
        <Card
          title={"Corporate Headquarters"}
          description={`Located at 4100 Eldorado Pkwy, Suite 100-266,
             McKinney, TX 75070, Health Trixss operates with a focus on
              value addition and simplicity.`}
          icon={<Headphones size={40} />}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-sans font-bold pt-5 flex justify-center text-darkVoilet max-w-[640px] w-full text-center"
      >
        "We are looking for you as our happy client"
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-5 justify-center max-w-[640px] w-full text-center"
      >
        <div className="text-xl font-sans text-darkVoilet">
          We are dedicated to unraveling the intricate world of healthcare,
          turning complexity into clarity, and enabling informed decisions that
          drive efficiency, innovation, and success.
        </div>
        <div className="flex flex-col gap-2 pt-4 mb-4">
          <div className="text-lg text-darkVoilet font-bold">Xyz Kumar</div>
          <div className="text-base text-darkVoilet font-medium ">
            Ceo/Founder
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Testimonials };
