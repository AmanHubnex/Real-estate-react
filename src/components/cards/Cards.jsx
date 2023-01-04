import React from "react";
import Card from "./Card";

const Cards = ({ cardsData, heading }) => {
  return (
    <div className="min-h-screen bg-blue-100">
      <div className="text-center py-5 lg:py-8">
        <span className="uppercase text-xl md:text-2xl">{heading}</span>
        <h3 className="uppercase text-3xl pt-2 sm:text-4xl text-purple-500 font-semibold md:text-5xl lg:text-6xl">
          Don't wait to buy Property, Buy Property and wait.
        </h3>

        <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-5 mb-2"></div>
      </div>

      <div className="pb-8 px-6 md:pb-10 md:px-14 lg:px-20 xl:px-24 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-0 mt-3">
          {cardsData.map((card) => (
            <Card data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
