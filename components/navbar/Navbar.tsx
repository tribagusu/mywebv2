import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center md:w-11/12">
      <div className="text-light text-sm flex mt-3 border-b border-dark">
        <Link
          href="/"
          className="py-3 px-10 rounded-md hover:bg-grey hover:bg-opacity-20 hover:text-white transition ease-in-out duration-100"
        >
          Project
        </Link>
        <Link
          href="/blog"
          className="py-3 px-10 rounded-md hover:bg-grey hover:bg-opacity-20 hover:text-white transition ease-in-out duration-100"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
