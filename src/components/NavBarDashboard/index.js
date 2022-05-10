import React from "react";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarDashboard = ({ displayName }) => {
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-grow md:w-1/3 justify-center md:justify-start items-center text-white">
          <Link to="/" className="flex justify-center items-center">
            <span className="text-xl ml-4 pl-2">
              <h2>My Restaurant</h2>
            </span>
          </Link>
        </div>

        <div className="flex w-full py-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:mr-3">
              <div className="relative flex p-2 mx-2 inline-block">
                <span className="mr-2">
                  <FaRobot className="h-6 w-6 text-white" />
                </span>
                <span className="text-white">Hi, {displayName}</span>
              </div>
            </li>
            <li className="mr-4">
              <button className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-800 transition duration-300 ease-in-out">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDashboard;
