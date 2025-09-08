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
    <div className="flex max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6 border-b-2 ">
      {/* Image */}
      <div className="w-1/3 flex justify-center items-center ">
        <img
          src={item.image}
          alt={item.title}
          className=" object-contain h-auto w-auto"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 flex flex-col justify-between pl-6">
        <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
        <h3 className="text-gray-600 mt-2 line-clamp-2">{item.description}</h3>

        {/* Price & Delete */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-bold text-lg">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
