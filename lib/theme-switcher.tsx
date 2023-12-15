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
      {theme === "light" ? (
        <button
          className="flex text-[22px] p-4 cursor-pointer hover:text-accent "
          onClick={() => setTheme("dark")}
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          className="flex text-[22px] p-4 cursor-pointer hover:text-accent "
          onClick={() => setTheme("light")}
        >
          <MdNightlight />
        </button>
      )}
    </>
  );
}
