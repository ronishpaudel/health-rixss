import React from "react";
import { Header } from "./src/components/header";
import { Main } from "./src/components/main";
import { Footer } from "./src/components/footer";
import { Testimonials } from "./src/components/testimonial";
import { ClientTestimonials } from "./src/components/client";
import FooterBanner from "./src/components/footerBanner";
import ScrollToTopButton from "./src/components/scrollTopButton";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <Main />
      <Testimonials />
      <ClientTestimonials />
      <Footer />
      {/* <FooterBanner /> */}
      <ScrollToTopButton />
    </div>
  );
};

export default page;
