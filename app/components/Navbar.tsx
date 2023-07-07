"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="flex justify-center items-center md:w-11/12 mx-auto">
      <div className="text-light text-sm flex mt-3">
        <Link
          href="/"
          className={`py-3 px-10 rounded-md hover:text-white ${
            currentRoute === "/" ? "bg-grey bg-opacity-20" : "bg-[#1d1e20]"
          }`}
        >
          Dev
        </Link>
        <Link
          href="/blog"
          className={`py-3 px-10 rounded-md hover:text-white ${
            currentRoute.includes("/blog")
              ? "bg-grey bg-opacity-20"
              : "bg-[#1d1e20]"
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
