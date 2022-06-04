import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Fertilizer from "./Fertilizer";
import "./Home.css";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  return (
    <>
      {" "}
      <div>
        <Banner />
        <Feature />
        <div>
          <Products />
        </div>
        {/* <Fertilizer /> */}
      </div>
      <Review />
    </>
  );
};

export default Home;
