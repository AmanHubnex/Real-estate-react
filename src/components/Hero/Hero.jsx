import React from "react";

const Hero = () => {
  const hero1 =
    "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg";

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero1})` }}
        className="h-[140vh] md:h-full w-full bg-no-repeat bg-cover bg-fixed overflow-hidden opacity-70 z-[-1] absolute"
      ></div>

      <div className="bg-[#002448] h-[140vh] md:h-full w-full bg-fixed overflow-hidden absolute opacity-70 z-[-1]"></div>

      <div className="min-h-screen">
        <div className="flex items-center justify-between text-white p-7 md:p-10">
          <div className="text-2xl font-bold">
            <h2>RVD</h2>
          </div>

          <div className="flex gap-5 items-center text-2xl">
            <h2>Home</h2>
            <h2>About Us</h2>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-7 md:flex-row sm:p-10 md:px-20 md:gap-14 md:justify-between lg:px-36 xl:px-44">
          <div className="flex flex-col gap-5 md:flex-1">
            <span className=" bg-purple-400 px-3 py-2 w-max lg:text-2xl text-white">
              📱 +91 457435743
            </span>

            <h1 className="uppercase text-white text-6xl lg:text-8xl lg:pt-10 lg:tracking-wide">
              Find your dream home today
            </h1>

            <p className="text-white text-xl tracking-wider lg:text-2xl">
              Rvd is a group of company having prominent experience in Real
              Estate.
            </p>

            <button className="px-4 py-2 border bg-white text-purple-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 text-xl font-semibold max-w-xs lg:text-2xl">
              Contact Us
            </button>
          </div>

          <div className="md:flex-1">
            <form>
              <div className="border bg-blue-200 px-5 py-6 flex flex-col gap-5 md:max-w-sm md:ml-auto lg:py-20 lg:px-8">
                <div className="flex flex-col gap-3 items-center">
                  <p className="text-xl lg:text-2xl">NEED HELP?</p>
                  <h4 className="text-2xl text-purple-500 font-semibold lg:text-3xl">
                    MESSAGE US
                  </h4>
                </div>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none px-3 py-2 text-lg lg:text-xl"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none px-3 py-2 text-lg lg:text-xl"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="outline-none px-3 py-2 text-lg lg:text-xl"
                />
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-xl font-semibold lg:text-2xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
