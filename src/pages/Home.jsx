import React from "react";
import { BsWhatsapp } from "react-icons/bs";
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
      <div>
        <a href="https:/wa.me/9555152033" target="_blank">
          <BsWhatsapp className="fixed z-20 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 shadow-lg text-5xl md:text-6xl lg:text-7xl text-white rounded-full p-2" />
        </a>
      </div>
      <Hero />
      <Cards cardsData={dummyArr1} heading="Featured Listings" />
      <Hero2 />
      <Cards cardsData={dummyArr2} heading="Unique Listings" />
      <Hero3 />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
