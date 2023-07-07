import React from "react";

export default function Footer() {
  return (
    <footer className="flex px-4 justify-center w-11/12 md:w-10/12 mx-auto border-t border-dark">
      <span className=" text-light text-center text-sm font-thin py-6 md:py-8 ">
        &copy; 2023 <strong className="text-white">triBagus</strong> powered by
        &hearts;
      </span>
    </footer>
  );
}
