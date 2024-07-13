import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const { push } = useRouter();
  return (
    <div className=" flex flex-col items-center space-y-2 bg-white text-darkVoilet">
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect" onClick={() => push("/about-us")}>
          About
        </span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect" onClick={() => push("/services")}>
          Services
        </span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span
          className="underline-effect"
          onClick={() => push("/our-products")}
        >
          Our Products
        </span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect" onClick={() => push("/our-team")}>
          Our Team
        </span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect" onClick={() => push("/contact-us")}>
          Contact
        </span>
      </div>
    </div>
  );
};

export { NavBar };
