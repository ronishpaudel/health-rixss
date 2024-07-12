import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { item } from "@/app/motion-framer";

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={item}
      className="min-h-[300px] max-w-[480px] bg-slate-50 w-full flex flex-col gap-5 items-start justify-center p-6 rounded-lg border hover:shadow-lg cursor-pointer border-slate-300"
    >
      <div className="w-[200px] h-[50px]">{icon}</div>
      <div className="mt-2 flex flex-col gap-2">
        <h3 className="text-xl font-bold mb-2 font-sans ">{title}</h3>
        <p className="font-sans text-base aspect-video">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
