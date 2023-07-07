import React from "react";

export default function Footer() {
  return (
    <footer className="container flex justify-center md:w-8/12 mx-auto ">
      <span className=" text-light text-center text-sm font-thin py-6 md:py-8 border-t border-dark">
        &copy; 2023 <strong className="text-white">triBagus</strong> powered by
        &hearts;
      </span>
    </footer>
  );
}
