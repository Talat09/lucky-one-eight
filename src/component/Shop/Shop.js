import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addEventHandler = (SelectedProduct) => {
    // console.log(SelectedProduct);
    if (cart.length < 4) {
      const newCart = [...cart, SelectedProduct];
      setCart(newCart);
    } else {
      alert("sorry");
    }
  };
  const ChoseOne = () => {
    const newCart = cart[Math.floor(Math.random() * cart.length)];
    setCart([newCart]);
  };
  const resetHandelar = () => {
    setCart([]);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addEventHandler={addEventHandler}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <div>
          {cart.map((item) => (
            <li>{item.name}</li>
          ))}
        </div>
        <Cart
          cart={cart}
          ChoseOne={ChoseOne}
          resetHandelar={resetHandelar}
          key={cart.id}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
