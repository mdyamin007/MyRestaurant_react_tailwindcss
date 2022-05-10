import React from "react";
import { Link } from "react-router-dom";

const ProductsAdmin = () => {
  return (
    <div class="main-content flex-1 bg-gray-100 mt-20 md:mt-12 pb-24 md:pb-5">
      <div class="bg-gray-800 pt-3">
        <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h3 class="font-bold pl-2">Products</h3>
        </div>
      </div>
      <Link to="add-new-product">
        <button className="font-bold text-lg my-4 mx-6 bg-gray-200 hover:border-transparent hover:text-white hover:bg-gray-400 border border-solid border-black transition-all duration-300 ease-in-out px-4 py-2 rounded">
          Add new products
        </button>
      </Link>
    </div>
  );
};

export default ProductsAdmin;
