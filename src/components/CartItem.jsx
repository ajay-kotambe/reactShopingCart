import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(item.id));
    toast.error("Item Removed..!");
  };

  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div>
          <p>{item.price}</p>
        </div>
        <div onClick={removeFromCart}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
