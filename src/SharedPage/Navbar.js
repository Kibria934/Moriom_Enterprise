import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assetes/Image/logo.svg";
import { AiOutlineShopping, AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div class="navbar flex justify-between bg-base-100 lg:px-16 shadow-2xl">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} class="">
          <img
            className="bg-transparent lg:ml-0 ml-20"
            width={"80px"}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div class=" hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link className="text-xl font-semibold mx-2" to={"/"}>
              Store
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold mx-2" to={"/"}>
              About
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold mx-2" to={"/"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold mx-2" to={"/"}>
              Login
            </Link>
          </li>
          <li>
            <span className="text-primary text-5xl">
              <AiOutlineShopping />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
