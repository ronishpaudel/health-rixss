"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { User } from "lucide-react";
import { ScrollAnimation } from "@/app/motion-framer/scrollAnimation";

const testimonials = [
  {
    text: "We call Health Trixss ‘The Dream Team’. They have implemented a data service that meets our customer’s requirement to a ‘T’.",
    author: "CMO, In-Home Care Organization",
  },
  {
    text: "We did not know how much we did not know. Health Trixss has provided great guidance in healthcare policy, compliance and operations. Our product roadmap is actionable now.",
    author: "CRO, Service Organization for Health Plans and Providers",
  },
];

const ClientTestimonials = () => {
  return (
    <div className="px-[10%] max-w-[1920px] w-full pt-[2%] pb-[4%]">
      <ScrollAnimation>
        <div className="text-3xl mb-6 text-yellow-500 font-sans font-bold flex justify-center items-center">
          Customer Testimony
        </div>
      </ScrollAnimation>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <User size={50} className="mb-4" />
            <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
            <p className="mt-2 font-semibold text-gray-900">
              {testimonial.author}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export { ClientTestimonials };
