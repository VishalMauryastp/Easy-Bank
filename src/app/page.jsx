"use client";

import Hero from "@/components/Home/Hero";
import LatestArticle from "@/components/Home/LatestArticle";
import WhyChoose from "@/components/Home/WhyChoose";
import React, { useEffect } from "react";

const Page = () => {
  return (
    <section className=" ">
      <Hero/>
      <WhyChoose/>
      <LatestArticle/>
    </section>
  );
};

export default Page;
