import React from "react";

const WhyChoose = () => {
  const data = [
    {
      img: "/images/icon-online.svg",
      heading: "Online Banking",
      para: " Online Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. ",
    },
    {
      img: "/images/icon-budgeting.svg",
      heading: "Simple Budgeting",
      para: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      img: "/images/icon-onboarding.svg",
      heading: "Fast Onboarding",
      para: " We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ",
    },
    {
      img: "/images/icon-api.svg",
      heading: "Open Api",
      para: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.  ",
    },
  ];
  return (
    <div className="py-16 lg:pt-0 lg:pb-24 bg-[#f3f4f6]">
    <div className="w-[90%] md:w-[80%] mx-auto">
      <h1 className="text-[24px] md:text-3xl font-bold text-center lg:text-left">Why choose Easybank? </h1>
      <p className="mt-5 lg:max-w-[600px] text-[#9698a6] text-center lg:text-left">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before
      </p>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((val, i) => {
          return (
            <div key={i} className="text-center lg:text-left">
              <img className="mx-auto lg:mx-0" src={val.img} alt="loading..." />
              <h2 className="my-4 text-[18px] md:text-xl font-bold">{val.heading}</h2>
              <p className="text-[#9698a6]">{val.para}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default WhyChoose;
