import React from "react";
import "./Product.css";
const Product = (props) => {
  const { addEventHandler, product } = props;
  const { img, name, price, seller } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <p className="seller">{seller}</p>
      <button
        className="addToCart-btn"
        onClick={() => addEventHandler(product)}
      >
        Add TO Cart
      </button>
    </div>
  );
};

export default Product;
