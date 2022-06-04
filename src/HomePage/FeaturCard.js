import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const FeaturCard = ({ img, title, body }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/home")}
      class="card card-box w-96 bg-base-100 border hover:translate-y-3 hover:shadow-2xl"
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">{title}</h2>
        <p className="text-xl">
          <i>{body}</i>
        </p>
        <Link
          className="flex read-more flex-shrink-0 justify-end items-center text-info font-semibold"
          to={"/"}
        >
          Read more
          <span className="ml-2">
            <BsArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturCard;
