import React from "react";
import { MdOutlineOtherHouses, MdApartment } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

const Hero3 = () => {
  const hero3 =
    "https://www.contractorbhai.com/wp-content/uploads/2017/12/Benefits-Modern-Minimal-Interior-Design-Contractorbhai.jpg";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero3})` }}
        className="h-[210vh] sm:h-[175vh] md:h-full w-full bg-no-repeat bg-cover bg-fixed overflow-hidden opacity-70 z-[-1] absolute"
      ></div>

      <div className="bg-[#170165] h-[210vh] sm:h-[175vh] md:h-full w-full bg-fixed overflow-hidden absolute opacity-70 z-[-1]"></div>

      <div className="min-h-screen">
        <div className="lg:p-20">
          <div className="text-white p-8 text-center">
            <h6 className="uppercase text-xl">we're here to help you</h6>
            <h4 className="uppercase text-5xl lg:text-6xl pt-4">
              What are you looking for?
            </h4>
          </div>

          <div className="flex flex-col gap-10 p-10 md:flex-row">
            <div className="md:flex-1">
              <div className="text-white text-center max-w-sm mx-auto">
                <div className="flex justify-center text-5xl">
                  <MdApartment />
                </div>
                <h3 className="uppercase text-3xl">Apartments</h3>
                <div className="w-16 h-0.5 bg-white mx-auto my-5"></div>
                <p className="text-xl tracking-wider">
                  We are committed to building a sustainable future by fostering
                  a collaborative spirit that creates exceptional experiences,
                  balanced relationships, and enhances a community’s built
                  environment.
                </p>
                <button className="px-4 py-1.5 bg-blue-100 hover:bg-blue-200 text-purple-800 font-semibold text-xl lg:text-2xl mt-5 tracking-wide">
                  Find Apartments
                </button>
              </div>
            </div>
            <div className="md:flex-1">
              <div className="text-white text-center max-w-sm mx-auto">
                <div className="flex justify-center text-5xl">
                  <MdOutlineOtherHouses />
                </div>
                <h3 className="uppercase text-3xl">Houses</h3>
                <div className="w-16 h-0.5 bg-white mx-auto my-5"></div>
                <p className="text-xl tracking-wider">
                  With a workplace that attracts and retains the best employees
                  in every field. We are proud of the dedication, skill, and
                  integrity of each of our employees, and their unique
                  contributions in building our high-performance teams.
                </p>
                <button className="px-4 py-1.5 bg-blue-100 hover:bg-blue-200 text-purple-800 font-semibold text-xl lg:text-2xl mt-5 tracking-wide">
                  Find Houses
                </button>
              </div>
            </div>
            <div className="md:flex-1">
              <div className="text-white text-center max-w-sm mx-auto">
                <div className="flex justify-center text-5xl">
                  <BiBuildings />
                </div>
                <h3 className="uppercase text-3xl">Offices</h3>
                <div className="w-16 h-0.5 bg-white mx-auto my-5"></div>
                <p className="text-xl tracking-wider">
                  Commitment to our clients begins with a commitment to culture.
                  We realize that our success starts and ends with our employees
                  so we have built a work environment of empowerment and
                  collaboration.
                </p>
                <button className="px-4 py-1.5 bg-blue-100 hover:bg-blue-200 text-purple-800 font-semibold text-xl lg:text-2xl mt-5 tracking-wide">
                  Find Offices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
