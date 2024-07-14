import Link from "next/link";

import React from "react";

const NavBar = () => {
  return (
    <div className=" flex flex-col items-center space-y-2 bg-white text-darkVoilet">
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/" prefetch>
          <a className="underline-effect">Home</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/about-us" prefetch>
          <a className="underline-effect">About</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/services" prefetch>
          <a className="underline-effect">Services</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/our-products" prefetch>
          <a className="underline-effect">Our Products</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/our-team" prefetch>
          <a className="underline-effect">Our Team</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/news-letter" prefetch>
          <a className="underline-effect">Articles</a>
        </Link>
      </div>
      <div className="relative cursor-pointer hover:text-gray-200 w-full border-b border-gray-300 py-2">
        <Link href="/contact-us" prefetch>
          <a className="underline-effect">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export { NavBar };
