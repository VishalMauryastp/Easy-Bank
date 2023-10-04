import Link from "next/link";
import React from "react";

const Footer = () => {
  const icons = [
    "/images/icon-facebook.svg",
    "/images/icon-youtube.svg",
    "/images/icon-twitter.svg",
    "/images/icon-pinterest.svg",
    "/images/icon-instagram.svg",
  ];
  return (
    <footer className="bg-[#2d314d] py-12">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex  flex-col md:flex-row gap-8 lg:gap-32">
          <div className="flex flex-col justify-between  ">
            <img className="mx-auto" src="/images/footer-icon.svg" alt="logo" />
            <div className="flex gap-4 w-fit mx-auto mt-8 md:mt-0 ">
              {icons.map((val, i) => {
                return (
                  <Link href={"/"}>
                    <img src={val} alt="loading..." />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid md:grid-cols-2   lg:gap-16 ">
            <div className=" text-center md:text-left ">
              <Link className="text-white font-medium block py-1 md:w-fit" href="/about">
                About
              </Link>
              <Link className="text-white font-medium block py-1 md:w-fit" href="/contact">
                Contact
              </Link>
              <Link className="text-white font-medium block py-1 md:w-fit" href="/blog">
                Blog
              </Link>
            </div>
            <div className="text-center  ">
              <Link className="text-white font-medium block py-1 md:w-fit" href="/careers">
                Careers
              </Link>
              <Link className="text-white font-medium block py-1 md:w-fit" href="/support">
                Support
              </Link>
              <Link className="text-white font-medium block py-1 md:w-fit" href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-fit text-center">
          <div>
            <button className="mx-auto mt-8 block md:ml-auto md:mr-0 px-8 text-white font-semibold rounded-3xl py-3 bg-gradient-to-r from-[#31d35c] to-[#2bb7da] ">
              Request Invite
            </button>
            <p className="mt-5 text-white md:text-[12px] lg:text-base">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
