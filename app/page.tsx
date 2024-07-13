import React from "react";
import { Header } from "./src/components/header";
import { Main } from "./src/components/main";
import { Footer } from "./src/components/footer";
import { Testimonials } from "./src/components/testimonial";
import { ClientTestimonials } from "./src/components/client";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <Main />
      <Testimonials />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default page;
