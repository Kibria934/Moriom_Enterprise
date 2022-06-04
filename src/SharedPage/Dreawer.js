import React from "react";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GiBottledBolt, GiFarmTractor } from "react-icons/gi";
import { FiFacebook } from "react-icons/fi";
import { TbMilk } from "react-icons/tb";
import "./Dreawer.css";
import CustomLink from "./CustomLink";

const Dreawer = () => {
  return (
    <div className="fixed lg:top-44 right-10">
      <div>
        <ul className="flex flex-col py-3 w-14 mx-auto rounded-lg font-bold text-4xl shadow-2xl ul bg-secondary text-info">
          <li className="p-2 list">
            <CustomLink to="/">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <AiOutlineHome />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2 list">
            <CustomLink to="/dashboard">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <BiCategory />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2  list">
            <CustomLink to="/fertilizer">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <GiFarmTractor />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2  list">
            <CustomLink to="/pesticide">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <GiBottledBolt />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2 active list">
            <CustomLink to="/dairy">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <TbMilk />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2 active list">
            <CustomLink to="/facebook">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <FiFacebook />
              </button>
            </CustomLink>
          </li>
          <li className="mt-3 p-2 active list">
            <CustomLink to="/contact">
              <button
                className="focus:border-2 focus:rounded-full focus:bg-primary focus:rounded-full focus:text-white"
                type=""
              >
                <AiOutlineContacts />
              </button>
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dreawer;
