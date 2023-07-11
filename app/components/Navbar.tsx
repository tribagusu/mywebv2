"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/lib/theme-switcher";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="flex pb-1 pt-4 md:pt-12 justify-between items-center w-11/12 md:w-8/12 mx-auto border-b border-dark dark:border-darkLight">
      <div className="text-light text-sm flex items-center">
        <Link
          href="/"
          className={`py-2 px-6 rounded font-normal ${
            !currentRoute.includes("/about")
              ? "bg-bgDark text-light dark:bg-light dark:text-dark"
              : "bg-none text-dark dark:bg-bgDark dark:text-light hover:text-accent dark:hover:text-accent"
          }`}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`py-2 px-6 rounded font-normal ${
            currentRoute.includes("/about")
              ? "bg-bgDark text-light dark:bg-light dark:text-dark"
              : "bg-none text-dark dark:bg-bgDark dark:text-light hover:text-accent dark:hover:text-accent"
          }`}
        >
          About
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
