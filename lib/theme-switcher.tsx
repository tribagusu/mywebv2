"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button
          className="flex text-[22px] py-3 px-4 cursor-pointer hover:text-accent "
          onClick={() => setTheme("light")}
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          className="flex text-[22px] py-3 px-4 cursor-pointer hover:text-accent "
          onClick={() => setTheme("dark")}
        >
          <MdNightlight />
        </button>
      )}
    </>
  );
}
