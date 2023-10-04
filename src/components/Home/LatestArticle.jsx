import React from "react";

const LatestArticle = () => {
  const data = [
    {
      img: "/images/image-currency.jpg",
      writer: "By Claire Robinson",
      heading: "Receive money in any currency with no fees",
      para: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      img: "/images/image-restaurant.jpg",
      writer: "By Wilson Hutton",
      heading: "Treat yourself without worrying about money",
      para: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      img: "/images/image-plane.jpg",
      writer: "By Wilson Hutton",
      heading: "Take your Easybank card wherever you go ",
      para: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      img: "/images/image-confetti.jpg",
      writer: " By Claire Robinson",
      heading: "Our invite-only Beta accounts are now live!",
      para: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <div className="bg-[#fafafa]">
      <div className="w-[90%] md:w-[80%] mx-auto py-12 md:py-16 lg:py-24">
        <h1 className="text-3xl font-bold md:text-4xl">Latest Articles</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 md:mt-16 ">
          {data.map((val, i) => {
            return (
              <div key={i} className="rounded overflow-hidden shadow-2xl">
                <div className="h-[250px] ">
                  <img
                    className="w-full h-full"
                    src={val.img}
                    alt="loading..."
                  />
                </div>
                <div className="py-8 lg:py-6 px-4 bg-white ">
                  <h1 className="text-[#9698a6] text-[10px] ">{val.writer}</h1>
                  <h2 className="text-xl my-2">{val.heading}</h2>
                  <p className="text-[#9698a6] text-[15px]">{val.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
