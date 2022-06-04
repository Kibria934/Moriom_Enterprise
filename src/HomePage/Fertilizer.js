import React from "react";
import back from "../Assetes/Image/fertilizer.jpg";
import Btn from "../SharedPage/Btn";

const Fertilizer = () => {
  return (
    <div className="float-left w-full bg-gray-400 mt-24 py-10">
      <div className=" ml-20 justify-evenly">
        <div className="flex flex-1 items-center ">
          <div data-aos="fade-right" data-aos-duration="3000">
            <img className="w-[1000px]" src={back} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="h-full "
          >
            <div className="rounded-2xl border-white w-full bg-white lg:w-full h-full p-10 ml-[-200px] items-center">
              <h1 className="text-4xl f-tag font-semibold py-10 text-secondary">
                We work with every type of farmer to meet their challenges
              </h1>
              <div className="pb-10 ">
                <p>
                  Our fertilizer section are very careful about our farmer's
                  activities Our fertilizer section are very careful about our
                  farmer's activities Our fertilizer section are very careful
                  about our farmer's activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fertilizer;
