import Link from "next/link";
import React from "react";

const FooterBanner = () => {
  return (
    <div className="max-w-[1920px] w-full border-t text-center text-[16px] font-sans font-thin gap-10 px-[8%] py-4 bg-blue-950 text-white">
      © 2024 HealthTrixss LLC. All rights reserved. Designed & Developed by{" "}
      <Link
        href="https://www.ronishpaudel.com.np/"
        className="text-orange-400 hover:text-orange-500 hover:shadow-xl"
      >
        ronishpaudel.com.np
      </Link>
    </div>
  );
};

export default FooterBanner;
