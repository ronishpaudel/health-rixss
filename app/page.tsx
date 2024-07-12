import React from "react";
import { Header } from "./src/components/header";
import { Main } from "./src/components/main";
import { Footer } from "./src/components/footer";
import { Testimonials } from "./src/components/testimonial";

const page = () => {
  return (
    <div className="max-w-[1920px] w-full">
      <Header />
      <Main />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
