import React, { Suspense } from "react";
import { Header } from "./src/components/header";
import { Main } from "./src/components/main";
import { Footer } from "./src/components/footer";
import { Testimonials } from "./src/components/testimonial";
import { ClientTestimonials } from "./src/components/client";
import FooterBanner from "./src/components/footerBanner";
import ScrollToTopButton from "./src/components/scrollTopButton";
import Loading from "./loading";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
        <Testimonials />
        <ClientTestimonials />
        <Footer />
        {/* <FooterBanner /> */}
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
};

export default page;
