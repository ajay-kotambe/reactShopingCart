import { useSelector } from "react-redux";
import EmptyCartIndicator from "../components/EmptyCartIndicator";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-center gap-2">
          <div className="mt-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col justify-between bg-white shadow-md rounded-lg p-6 mt-2  w-80 mb-6">
            {/* Header */}
            <div>
              <p className="uppercase text-2xl font-semibold text-green-600  ">
                Your Cart
              </p>
              <h2 className="font-bold text-green-700 text-5xl pl-4 uppercase">
                Summary
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                Total Items:{" "}
                <span className="font-semibold">{cart.length}</span>
              </p>
            </div>

            {/* Footer */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-gray-700">
                Total Amount :{" "}
                <span className="font-bold text-black">${totalAmount}</span>
              </div>
              <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCartIndicator />
      )}
    </div>
  );
};

export default Cart;
