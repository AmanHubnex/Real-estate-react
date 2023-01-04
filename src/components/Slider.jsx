import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-5 p-5 sm:px-10 mt-5">
      <div className="flex justify-center items-center">
        <hr className="w-10 sm:border bg-black border-black mr-2" />
        <h1 className="text-center text-xl sm:text-2xl lg:text-2xl xl:text-3xl">
          Trusted By
        </h1>
        <hr className="w-10 sm:border bg-black border-black ml-2" />
      </div>

      {/* slider */}
      <div className="mt-8 md:mt-10 md:max-w-3xl md:mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-evenly items-center gap-5">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                alt=""
                className="w-28 h-14"
              />
            </div>

            <div className="hidden sm:flex justify-center items-center gap-5">
              <div className="flex justify-center items-center">
                <img
                  src="https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/000004594png_0_0.PNG"
                  alt=""
                  className="w-28 h-14"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:hidden">
            <div className="flex justify-center items-center gap-5">
              <div className="flex justify-center items-center">
                <img
                  src="https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/000004594png_0_0.PNG"
                  alt=""
                  className="w-28 h-14"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-evenly items-center gap-5">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://inkbotdesign.com/wp-content/uploads/2012/09/Walmart-Logo-Design.png?ezimgfmt=rs:352x211/rscb15/ngcb15/notWebP"
                alt=""
                className="w-28 h-14"
              />
            </div>

            <div className="hidden sm:flex justify-center items-center gap-5">
              <img
                src="https://www.brandbucket.com/images5/gc/logo-visualiq.png?"
                alt=""
                className="w-28 h-14"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:hidden">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://www.brandbucket.com/images5/gc/logo-visualiq.png?"
                alt=""
                className="w-28 h-14"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-evenly items-center gap-5">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://www.brandbucket.com/images5/gc/logo-visualiq.png?"
                alt=""
                className="w-28 h-14"
              />
            </div>

            <div className="hidden sm:flex justify-center items-center gap-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5S574_Tidg-ivx_YzPQnl2MHo7GdtfO5K4oZGMYwp_0rkxtd4WZCRkxLuZgFk1tHpl8&usqp=CAU"
                alt=""
                className="w-28 h-14"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:hidden">
            <div className="flex justify-center items-center gap-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5S574_Tidg-ivx_YzPQnl2MHo7GdtfO5K4oZGMYwp_0rkxtd4WZCRkxLuZgFk1tHpl8&usqp=CAU"
                alt=""
                className="w-28 h-14"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col items-center gap-6 mt-20">
        <span className="text-pink-500 font-semibold text-2xl md:text-3xl">
          📱 +91 9555152033
        </span>
        <h3 className="uppercase text-3xl font-semibold text-purple-500 text-center md:text-4xl lg:text-6xl lg:font-medium xl:text-7xl">
          LET'S FIND YOU TOGETHER THE PLACE YOU DESERVE
        </h3>
        <hr className="w-10 border bg-pink-500 border-pink-500 ml-2" />

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Find your Dream Home with us.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-1.5 text-xl tracking-wide md:text-2xl">
          Email Us
        </button>
      </div>

      <div className="h-[40vh] w-[80vw] overflow-hidden mx-auto my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14001.930206377461!2d77.16001955!3d28.675208399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672301486579!5m2!1sen!2sin"
          width="2000"
          height="2000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Slider;
