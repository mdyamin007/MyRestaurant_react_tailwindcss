import React, { useContext, useEffect, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
import { handleLogout } from "../../utils/firebase";
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from "../../contexts/CartDetailsContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cart && cart.total_items) {
      setCount(cart.total_items);
    }
  }, [cart]);

  // console.log(user);

  return (
    <header className=" text-gray-600 body-font">
      <div className="container bg-white z-40 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <GiForkKnifeSpoon className="h-8 w-8 text-red-600" />
          <span className="ml-3 text-3xl font-bold">My Restaurant</span>
        </Link>
        <nav className="cursor-pointer md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Popular
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Gallery
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Reviews
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        {user ? (
          <div className="flex justify-center items-center">
            <Link to="/cart">
              <div className="relative transition-transform duration-300 mr-5 ease-in-out transform  cursor-pointer hover:scale-105">
                <CgShoppingCart className="h-6 w-6" />
                <span className="absolute -right-2 -top-2  w-4 h-4 top right p-0 m-0 font-bold text-red-600 font-mono text-sm leading-tight text-center">
                  {count}
                </span>
              </div>
            </Link>
            <Link to="/my-account">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-50 transition-all duration-300 ease-in-out rounded text-base text-black mt-4 md:mt-0">
                My Account
              </button>
            </Link>
            <button
              onClick={() => {
                handleLogout();
                window.location.reload();
              }}
              className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 ml-4 transition-all duration-300 ease-in-out rounded text-base text-white mt-4 md:mt-0"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 transition-all duration-300 ease-in-out rounded text-base text-white mt-4 md:mt-0">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-800 ml-4 transition-all duration-300 ease-in-out rounded text-base text-white mt-4 md:mt-0">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
