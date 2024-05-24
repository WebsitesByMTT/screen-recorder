"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" p-5 lg:px-14 lg:pt-8 absolute top-0 left-0 w-full z-50 ">
        <div className="flex items-center justify-between ">
          <a href="/" className="">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-[10rem] h-auto"
            />
          </a>
          <ul className=" hidden lg:flex items-center gap-8 text-white text-lg">
            <a href="/features">
              <li className=" text-base">Features</li>
            </a>
            <a href="/blogs">
              <li className=" text-base">Blogs</li>
            </a>
            <li>
              <Button />
            </li>
          </ul>
          <div
            className="absolute w-6 h-4 z-50 right-4 transform rotate-0 transition-all duration-200 ease-in-out cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute block h-[2px] w-full bg-white transform rotate-0 transition-all duration-100 ease-in-out top-0 ${
                isOpen && " top-[7px] rotate-[135deg]"
              }`}
            ></span>
            <span
              className={`absolute block h-[2px] w-full bg-white transform rotate-0 transition-all duration-100 ease-in-out top-2 ${
                isOpen && " hidden"
              }`}
            ></span>
            <span
              className={`absolute block h-[2px] w-full bg-[white] transform rotate-0 transition-all duration-100 ease-in-out top-4 ${
                isOpen && " top-[7px] rotate-[-135deg]"
              }`}
            ></span>
          </div>
        </div>

          <div className={`backdrop-blur-[5px] absolute left-0 top-0 w-full ${isOpen?'h-[50vh] transition-all  p-4':'h-[0vh] transition-all'}  flex items-center justify-center rounded-b-3xl lg:hidden`}>
            {isOpen&&<ul className="  flex items-center flex-col justify-center gap-4">
              <li className=" text-white text-base cursor-pointer">Features</li>
              <li className=" text-white text-base cursor-pointer">Blog</li>
              <li>
                <button className=" border border-white rounded-3xl flex items-center px-4 py-2">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7799 14.2116C16.8301 12.1614 16.8304 8.83696 14.7799 6.78642C12.7294 4.73589 9.40522 4.73589 7.35469 6.78642C5.30416 8.83696 5.30416 12.1611 7.35469 14.2116C9.40522 16.2622 12.7294 16.2622 14.7799 14.2116Z"
                      fill="white"
                    />
                    <path
                      d="M9.70893 15.572L0.926723 13.2188C1.40356 14.9993 2.3406 16.6228 3.64395 17.9262C4.9473 19.2295 6.57057 20.1669 8.35105 20.6437C10.1315 21.1205 12.0059 21.1202 13.7864 20.6428C15.5669 20.1654 17.1898 19.2278 18.4929 17.9241L16.1393 9.14163L16.1385 9.14076C16.3776 10.0308 16.3779 10.9685 16.1396 11.8589C15.9014 12.7492 15.433 13.5612 14.7812 14.213C14.1293 14.8648 13.3177 15.3335 12.4273 15.5723C11.5369 15.8112 10.5993 15.8109 9.70893 15.572Z"
                      fill="#249644"
                    />
                    <path
                      d="M16.1393 9.14105L18.4926 17.9233C19.7962 16.6202 20.7336 14.9969 21.2104 13.2165C21.6875 11.4363 21.6875 9.5616 21.2104 7.78142C20.7333 6.00124 19.7956 4.37767 18.492 3.07461C17.1884 1.77156 15.5648 0.834509 13.7843 0.358259L7.35537 6.78721L7.35508 6.78867C8.0066 6.13656 8.81824 5.66731 9.70833 5.42874C10.5987 5.18989 11.5361 5.18989 12.4264 5.42816C13.3168 5.66643 14.1287 6.13539 14.7806 6.78721C15.4324 7.43845 15.9008 8.25038 16.1393 9.14105Z"
                      fill="#FBBF0F"
                    />
                    <path
                      d="M14.0074 13.4392C15.6307 11.8159 15.6307 9.18411 14.0074 7.56083C12.3842 5.93756 9.75239 5.93756 8.12911 7.56083C6.50583 9.18411 6.50583 11.8159 8.12911 13.4392C9.75239 15.0624 12.3842 15.0624 14.0074 13.4392Z"
                      fill="#1A73E8"
                    />
                    <path
                      d="M7.35581 6.78766L13.785 0.358412C12.0046 -0.119006 10.1299 -0.119006 8.34972 0.35812C6.56925 0.834955 4.94597 1.77229 3.64262 3.07564C2.33928 4.37899 1.40223 6.00256 0.925396 7.78303C0.448562 9.5635 0.449145 11.4382 0.926563 13.2181L9.70906 15.5716L9.71052 15.5713C8.82014 15.3331 8.00792 14.865 7.3561 14.2131C6.70428 13.5613 6.23503 12.7497 5.99646 11.8596C5.75761 10.9692 5.75761 10.0319 5.99646 9.1415C6.23474 8.25111 6.7037 7.43918 7.35581 6.78766Z"
                      fill="#DF362A"
                    />
                  </svg>
                  <span className=" text-white text-base">
                    Add to Chrome it’s free
                  </span>
                </button>
              </li>
            </ul>}
          </div>
      </div>
    </>
  );
};

export default Navbar;
