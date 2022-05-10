import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Product = ({ productId, productName, productPrice, productImage }) => {
  return (
    <Link
      to={`product/${productId}`}
      className="no-underline cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg my-4 transition-transform duration-300 ease-linear transform hover:scale-105"
    >
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={`${productImage}`}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {productName}
        </h2>
        <p className="mt-1">{productPrice}</p>
      </div>
    </Link>
  );
};

export default Product;
