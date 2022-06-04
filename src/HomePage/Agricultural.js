import { AiOutlineStar } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import React from "react";

const Agricultural = ({ product }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.img} alt="Product" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product.name}</h2>
        <p className="flex text-info font-semibold">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </p>
        <h2 class="card-title">
          <TbCurrencyTaka /> {product.price}
        </h2>

        <p>{product.des}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Agricultural;
