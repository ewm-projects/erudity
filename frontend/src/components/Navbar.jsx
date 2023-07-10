import React from "react";
import { Link } from "react-router-dom";
import { tutorialsList } from "../utils/constants";

function Navbar() {
  return (
    <div className="navbar bg-base-100 py-2 border-b">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-xl">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://t3.ftcdn.net/jpg/03/33/09/90/240_F_333099003_k7dXXa71RslgmqM2yxTe0LvkA04wX9C8.jpg" />
            </div>
          </label>
        </Link>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost m-1">
            Programming{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {tutorialsList.map((item) => (
              <li key={item.id}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-ghost">Signup</button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <div className="navbar-end hidden md:flex">
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-ghost">Signup</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */
}
