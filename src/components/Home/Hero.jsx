import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row lg:min-h-[calc(100vh-80px)] after:hidden lg:after:block after:absolute after:w-full after:b after:h-[17%] after:-bottom-0  bg-[#fafafa]  after:bg-[#f3f4f6]">
      <div className="lg:w-[45%]  flex  lg:h-[calc(100vh-80px)]   ">
        <div className="m-auto lg:w-[400px] py-16 w-[90%] mx-auto text-center lg:text-left">
          <h1 className="text-3xl font-semibold md:text-5xl md:leading-[65px]">
            {" "}
            Next generation digital banking{" "}
          </h1>
          <p className="text-[16px] my-4  md:my-8 text-[#9698a6]">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="px-8 text-white font-semibold rounded-3xl py-3 bg-gradient-to-r from-[#31d35c] to-[#2bb7da] ">
            Request Invite
          </button>
        </div>
      </div>
      <div className="lg:w-[55%] relative overflow-hidden flex back bg-no-repeat max-[768px]:bg-cover bg-[0px_-60px]  bg-[url('/images/bg-intro-mobile.svg')] md:bg-[20px_-290px]   md:bg-[url('/images/bg-intro-desktop.svg')]">
      {/* bg-no-repeat  bg-[url('/images/bg-intro-desktop.svg')] */}
      {/* bg-[-110px_-530px] */}
       

        <img
          className="w-[75%] mx-auto md:w-[85%] min-[810px]:w-full lg:w-auto  lg:ml-auto lg:mr-[-7rem] mt-[-3rem] md:mt-[-15rem] lg:mt-[-10rem] relative z-[2]"
          src="/images/image-mockups.png"
          alt="loading..."
        />
      </div>
    </div>
  );
};

export default Hero;
