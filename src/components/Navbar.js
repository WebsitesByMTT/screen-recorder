import Image from "next/image";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="display flex items-center justify-between px-20 py-8">
      <a href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-[10rem] h-auto"
        />
      </a>
      <ul className="flex items-center gap-8 text-white text-lg">
        <a href="/features">
          <li>Features</li>
        </a>
        <a href="/blogs">
          <li>Blogs</li>
        </a>
        <li>
          <Button />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
