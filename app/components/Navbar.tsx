"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="flex px-4 justify-start items-center w-11/12 md:w-10/12 mx-auto border-b border-dark pb-3">
      <div className="text-light text-sm flex mt-3">
        <Link
          href="/"
          className={`py-2 px-6 rounded font-medium ${
            currentRoute === "/"
              ? "bg-light text-dark"
              : "bg-[#1d1e20] hover:text-white "
          }`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`py-2 px-6 rounded font-medium ${
            currentRoute.includes("/blog")
              ? "bg-light text-dark"
              : "bg-[#1d1e20] hover:text-white "
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
