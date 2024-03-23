"use client";
import React, { useState, useEffect } from "react";

interface ToggleButtonProps {
  initialTheme?: "light" | "dark";
}

const ToggleButton = ({ initialTheme = "light" }: ToggleButtonProps) => {
  const [isChecked, setIsChecked] = useState(initialTheme === "dark");
  const [theme, setTheme] = useState(initialTheme);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  const buttonClasses = `
    w-[55px] h-6 flex items-center bg-gray-300 rounded-full text-[9px]
    ${isChecked ? "peer-checked:text-black" : "text-gray-300"}
    font-extrabold
    after:flex after:items-center after:justify-center peer
    after:content-['Dark'] peer-checked:after:content-['Light']
    peer-checked:after:translate-x-full after:absolute after:left-[0px]
    peer-checked:after:border-white peer-checked:after:right-4
    after:bg-black peer-checked:after:bg-white after:border
    after:border-gray-300 after:rounded-full after:h-8 after:w-8
    after:transition-all peer-checked:bg-black
  `;

  return (
    <div className="flex items-center fixed right-4 md:right-10 lg:right-16 top-4 z-50">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={buttonClasses} />
      </label>
    </div>
  );
};

export default ToggleButton;
