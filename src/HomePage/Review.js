import React from "react";

const Review = () => {
  return (
    <div className="review w-10/12 mx-auto mt-10">
      <h2 className="text-center text-4xl text-secondary my-10 font-semibold">
        Customer Reviews
      </h2>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
