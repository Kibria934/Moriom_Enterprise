import React from "react";
import img1 from "../Assetes/Image/img1.jpg";
import img2 from "../Assetes/Image/img2.jpg";
import img3 from "../Assetes/Image/img3.jpg";
import FeaturCard from "./FeaturCard";

const Feature = () => {
  return (
    <>
      <h1 className="text-center text-secondary mt-10   font-bold text-3xl">
        <span className="feature">Some of our Services</span>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 mt-10  p-8 w-10/12 mx-auto lg:grid-cols-3"
      >
        <FeaturCard
          title={"Pesticides"}
          body={
            "We take care our plants with all essential organic or non-organic pesticides"
          }
          img={img1}
        />
        <FeaturCard
          title={"Fertilizer"}
          body={
            "Fertilizer is very essential of plants. We supply it for our customer. Search and order it"
          }
          img={img2}
        />
        <FeaturCard
          title={"Dairy Food"}
          body={
            "For all dairy farm we supply our best food for your cow. This good quality of food is served by us"
          }
          img={img3}
        />
      </div>
    </>
  );
};

export default Feature;
