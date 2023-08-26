import React, { useState } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex w-full py-4 px-8 items-center h-[10vh] justify-between xl:justify-start z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Power <span className="text-primary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={` fixed  w-[80%] xl:w-full md:w-[40%] h-full bg-white ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 trasnition-all duration-500 z-50`}
      >
        <a href="#" className=" hover:text-primary">
          Home
        </a>
        <a href="#" className=" hover:text-primary">
          About Us
        </a>
        <a href="#" className=" hover:text-primary">
          Services
        </a>
        <a href="#" className=" hover:text-primary">
          Products
        </a>
      </nav>
      <button
        className="xl:hidden text-2xl p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};
