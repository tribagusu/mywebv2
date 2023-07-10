import React from "react";

export default function Footer() {
  return (
    <footer className="flex px-4 justify-center w-11/12 md:w-8/12 mx-auto border-t border-dark dark:border-darkLight">
      <span className=" dark:text-light text-center text-sm font-thin py-6 md:py-8 ">
        &copy; 2023 <strong className="dark:text-white">triBagus</strong>{" "}
        powered by &hearts;
      </span>
    </footer>
  );
}
