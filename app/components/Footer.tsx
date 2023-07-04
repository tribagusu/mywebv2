import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center md:w-10/12 mx-auto border-t border-dark">
      <span className="text-light text-sm font-thin py-5 mt-10">
        &copy; 2023 <strong className="text-white">triBagus</strong> powered by
        &hearts;
      </span>
    </footer>
  );
}
