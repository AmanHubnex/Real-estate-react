import React from "react";
import Cards from "../components/cards/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";
import Slider from "../components/Slider";
import { dummyArr1, dummyArr2 } from "../dummy";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards cardsData={dummyArr1} />
      <Hero2 />
      <Cards cardsData={dummyArr2} />
      <Hero3 />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
