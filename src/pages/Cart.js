import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  
  return (
    <div className="cartWrapper">
      {product.map((item) => (
        <div className="cartCard" key={item.id}>
          <img src={item.image} alt="" />
          <h5>{item?.title}</h5>
          <h5>{item?.price}</h5>
          <button className="btn" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
