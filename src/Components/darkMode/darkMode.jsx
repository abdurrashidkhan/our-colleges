"use client";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

export default function DarkMode() {
  // Dark Mode setup
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      // Swal.fire("Dark Mode On !", "", "success");
    } else {
      setTheme("light");
      // Swal.fire("Light Mode On !", "", "success");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // console.log('clicked');
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        {theme === "dark" ? (
          <CiLight
            onClick={handleThemeSwitch}
            className=" dark:text-yellow-300 text-2xl"
          ></CiLight>
        ) : (
          <IoMdMoon
            onClick={handleThemeSwitch}
            className="text-2xl text-yellow-300"
          ></IoMdMoon>
        )}
        {/* {!dark ? (
          <CiLight onClick={themes} className="text-xl dark:text-red-700" />
        ) : (
          <CiLight
            onClick={() => setDark(true)}
            className="text-xl dark:text-red-700"
          />
        )} */}
      </div>
    </div>
  );
}
