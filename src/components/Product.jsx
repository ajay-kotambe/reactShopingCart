import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/slices/CartSlice";

const Product = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct(item));
    toast.success("Item added to cart..!");
  };
  const removeFromCart = () => {
    dispatch(removeProduct(item.id));
    toast.error("Item removed from cart..!");
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {item.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="" className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12 mt-5">
        <div>
          <p className="text-green-600 font-semibold items-center w-full  ">
            ${item.price}
          </p>
        </div>
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text[6px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300  ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text[6px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300  ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
