import React, { useEffect, useState } from "react";

import Agricultural from "./Agricultural";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [fertilizer, setFertilizer] = useState([]);
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`Product.json`)
      .then((res) => res.json())
      .then((data) => {
        const pesticides = data.filter((p) => p.type === "pesticides");
        setProduct(pesticides);
        const fertilizers = data.filter((f) => f.type === "fertilizer");
        setFertilizer(fertilizers);
        const food = data.filter((f) => f.type === "food");
        setFood(food);
      });
  }, []);

  return (
    <div>
      <h4 className=" text-center my-10 py-7 bg-secondary text-4xl text-base-200 font-semibold ">
        Products
      </h4>
      <div className="w-10/12 mx-auto">
        <h3 className="border-b-2 border-info inline p-2 text-2xl mt-10">
          Pesticides
        </h3>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="2000"
          className="grid grid-cols-1 mb-10 mt-6 lg:grid-cols-4 gap-5"
        >
          {products.map((product) => (
            <Agricultural product={product} key={product.id} />
          ))}
        </div>
        <h3 className="border-b-2  border-info inline p-2 text-2xl mt-10">
          Fertilizer
        </h3>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="2000"
          className="grid grid-cols-1 mb-10 mt-6 lg:grid-cols-4 gap-5"
        >
          {fertilizer.map((product) => (
            <Agricultural product={product} key={product.id} />
          ))}
        </div>
        <h3 className="border-b-2  border-info inline p-2 text-2xl mt-10">
          Dairy Food
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="2000"
          className="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-5"
        >
          {food.map((product) => (
            <Agricultural product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
