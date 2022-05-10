import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Products from "../../components/Products";
import { CartContext } from "../../contexts/CartDetailsContext";

const HomePage = ({ products }) => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <NavBar />
      <Products products={products} />
    </>
  );
};

export default HomePage;
