import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center w-11/12 px-4 mx-auto border-t md:w-8/12 border-dark dark:border-darkLight">
      <span className="py-6 text-sm font-thin text-center dark:text-light md:py-8">
        by <strong className="dark:text-[#ddd]">triBagus</strong>
      </span>
    </footer>
  );
}
