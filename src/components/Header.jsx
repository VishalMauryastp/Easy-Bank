"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const currentPage = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    {
      link: " Home",
      to: "/",
    },
    {
      link: "About ",
      to: "/about",
    },
    {
      link: "Contact",
      to: "/contact",
    },
    {
      link: "Blog",
      to: "/blog",
    },
    {
      link: "Careers",
      to: "/careers",
    },
  ];

  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     var header = document.getElementById("myHeader");
  //     if (window.scrollY >= 74) {
  //       header.classList.add("bg-headerLinks/10");
  //       header.classList.add("backdrop-blur-[10px]");
  //     } else {
  //       header.classList.remove("bg-headerLinks/10");
  //       header.classList.remove("backdrop-blur-[10px]");
  //     }
  //   });
  // }, [ ]);

  return (
    <header className="bg-white z-50 relative">
      <div className="w-[90%] lg:w-[80%]  mx-auto flex items-center  justify-between  py-7 min-[800px]:py-4">
        <div>
          <img
            className=""
            src="/images/logo.svg"
            alt="loading..."
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        <div className="min-[800px]:hidden ">
          <img
            className=""
            src={
              openMenu ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
            }
            alt={openMenu ? "Menu" : "close"}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
        <div className="hidden min-[800px]:flex gap-8 ">
          {navLinks.map((val, i) => {
            return (
              <Link
                key={i}
                className=" font-normal text-[#9698a6]"
                href={val.to}
              >
                {val.link}
              </Link>
            );
          })}
        </div>

        <button className="hidden min-[800px]:block px-8 text-white font-semibold rounded-3xl py-3 bg-gradient-to-r from-[#31d35c] to-[#2bb7da] ">
          Request Invite
        </button>
      </div>
      {/* ****************************************** mobile nav *************************************************** */}
      <div
        className={`absolute z-40 w-full bg-[#9698a6]/30 backdrop-blur-[2px]   grid transition-all duration-[400ms] ${
          openMenu
            ? "grid-rows-[1fr]  h-[calc(100vh-76px)] min-[800px]:h-auto"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-x-hidden">
          <div className="flex flex-col min-[800px]:hidden p-4 bg-white  mt-8 mx-5 rounded-md ">
            {navLinks.map((val, i) => {
              return (
                <Link
                  key={i}
                  className=" py-1 font-semibold text-center text-[#2d314d]"
                  href={val.to}
                >
                  {val.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
