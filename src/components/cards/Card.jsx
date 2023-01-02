import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer h-full relative"
      key={data?.id}
    >
      <img
        src={data?.image}
        alt=""
        className=" w-full object-fill sm:object-cover md:object-fill h-48 sm:h-56 xl:h-56"
      />

      <span
        className={`absolute left-10 pl-3 py-1 pr-10 tracking-wider font-semibold text-xl lg:text-2xl text-white top-44 sm:top-52 
      ${data?.placeType === "For Rent" ? "bg-pink-500" : "bg-purple-500"}
      `}
      >
        {data?.placeType}
      </span>

      <div className="flex flex-col gap-5 justify-between p-5 mt-4 sm:h-[calc(100%-15rem)] ">
        <div className="flex-[5] flex flex-col gap-2 justify-between ">
          <p className="text-xl font-bold mb-2">🏠 &nbsp; {data?.type}</p>
          <p
            className={`text-2xl lg:text-3xl xl:text-4xl uppercase   ${
              data?.placeType === "For Rent"
                ? "text-pink-700"
                : "text-purple-700"
            } `}
          >
            {data?.title}
          </p>
          <p className="text-xl text-gray-700 uppercase">Please Contact</p>
          <p className="text-lg text-gray-700 mb-3">
            3 BHK / 4 BHK / 1100 sq ft
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 px-3 py-1.5 text-2xl text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
