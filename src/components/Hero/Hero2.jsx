import React from "react";

const Hero2 = () => {
  const hero2 = "https://i.ytimg.com/vi/vZHPJPRNnQA/maxresdefault.jpg";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero2})` }}
        className="h-[150vh] md:h-full w-full bg-no-repeat bg-cover bg-fixed overflow-hidden opacity-70 z-[-1] absolute"
      ></div>

      <div className="bg-[#3c044d] h-[150vh] md:h-full w-full bg-fixed overflow-hidden absolute opacity-70 z-[-1]"></div>

      <div className="min-h-screen">
        <div className="flex flex-col gap-8 p-10 md:flex-row md:justify-between lg:px-36 xl:px-44">
          <div className="md:flex-1">
            <div className="flex gap-2 flex-col text-white">
              <h6 className="uppercase text-xl">Who we are</h6>
              <h4 className="uppercase text-5xl lg:text-6xl">About Us</h4>
              <div className="w-16 h-0.5 bg-white mt-5 mb-2"></div>
              <p className="text-xl tracking-wider max-w-md">
                TO BE THE HIGHEST VALUE PROVIDER OF GLOBAL CONSTRUCTION SERVICES
                AND TECHNICAL EXPERTISE.
              </p>
            </div>

            <div className="hidden md:flex">
              <div className="">
                <img
                  src="https://www.manglamgroup.com/wp-content/uploads/2015/11/aangan-prime-Sample-Villa-12.jpg"
                  alt=""
                  className="w-20 h-20 lg:w-32 lg:h-28 object-cover m-2"
                />
                <img
                  src="https://www.manglamgroup.com/wp-content/uploads/2015/11/aangan-prime-Sample-Villa-12.jpg"
                  alt=""
                  className="w-20 h-20 lg:w-32 lg:h-28 object-cover m-2"
                />
              </div>
              <div className="">
                <img
                  src="https://www.manglamgroup.com/wp-content/uploads/2015/11/aangan-prime-Sample-Villa-12.jpg"
                  alt=""
                  className="w-20 h-20 lg:w-32 lg:h-28 object-cover m-2"
                />
                <img
                  src="https://www.manglamgroup.com/wp-content/uploads/2015/11/aangan-prime-Sample-Villa-12.jpg"
                  alt=""
                  className="w-20 h-20 lg:w-32 lg:h-28 object-cover m-2"
                />
              </div>
            </div>

            <p className="text-xl tracking-wider max-w-md text-white">
              RVD is an association of 4 different companies in construction and
              development and it is a leading builder in diverse market
              segments. The company has earned recognition for undertaking
              large, complex projects, fostering innovation, embracing emerging
              technologies, and making a difference for their clients, employees
              and community.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-2 text-xl font-semibold lg:text-2xl my-2">
              Contact
            </button>
          </div>

          <div className="md:flex-1 my-auto max-w-md">
            <img
              src="https://media.istockphoto.com/id/1081341888/photo/rear-view-of-loving-couple-relaxing-on-sofa-and-watching-a-tv-at-home.jpg?s=612x612&w=0&k=20&c=v6UDWXnKfKUijr16OedNKeR6wE6wXnnFNBNaQAEv9VU="
              alt=""
              className="w-full h-80 md:h-[80vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
