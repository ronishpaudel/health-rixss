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
    <div className="px-[8%] max-w-[1920px] w-full py-10 bg-blue-50">
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
    </div>
  );
};

export { Testimonials };
