import React from "react";

const NavBar = () => {
  return (
    <div className=" flex flex-col items-center space-y-2 bg-white text-darkVoilet">
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect">About</span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect">Services</span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect">Our Products</span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect">Our Team</span>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <span className="underline-effect">Contact</span>
      </div>
    </div>
  );
};

export { NavBar };
