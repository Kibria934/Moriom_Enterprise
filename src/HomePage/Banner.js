import React from "react";
import banner from "../Assetes/Image/banner.png";
import Btn from "../SharedPage/Btn";

const Banner = () => {
  return (
    <div className="hero w-10/12 mx-auto">
      <div className="flex flex-1 justify-center w-full items-center h-[80vh]">
        <div className="relative">
          <h1
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="text-7xl py-8 text-center tracking-widest font-extrabold text-primary header-tag"
          >
            Moriom Enterprise
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-[60%] mx-auto"
          >
            <p className="text-lg font-medium text-center text-base-300 ">
              Your best searching product is here. The place where you can find
              the great quality of
              <span> Fertilizer</span>,<span> Pesticides </span>
              or <span>Dairy products </span>
              .We are very careful for your individual order.
            </p>
            <Btn>Order Now</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
