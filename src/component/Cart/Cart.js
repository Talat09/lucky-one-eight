import React from "react";

const Cart = (props) => {
  const { cart, ChoseOne, resetHandelar } = props;

  return (
    <div>
      <p>selected Item:{cart.length}</p>
      <br />
      <button onClick={ChoseOne}>Choose for one</button>
      <br />
      <button onClick={resetHandelar}>Reset</button>
    </div>
  );
};

export default Cart;
