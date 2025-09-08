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
    <div>
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      {cart.some((p) => p.id === item.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
