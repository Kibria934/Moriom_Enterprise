import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import "./Home.css";
import Items from "./Items";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Items />
    </div>
  );
};

export default Home;
