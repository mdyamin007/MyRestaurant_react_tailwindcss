import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products &&
            products.map((product) => (
              <Product
                key={product.id}
                productId={product.id}
                productName={product.name}
                productPrice={product.price.formatted_with_symbol}
                productImage={product.image.url}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
