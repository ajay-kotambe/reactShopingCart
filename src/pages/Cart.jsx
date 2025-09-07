import { useSelector } from "react-redux";
import EmptyCartIndicator from "../components/EmptyCartIndicator";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div>
            <div>
              <p>Your Cart</p>
              <h2>SUMMARY</h2>
              <p>
                Total Items: <span>{cart.length}</span>{" "}
              </p>
            </div>
            <div>
              <div>
                Total Amount: <span>{totalAmount}</span>
              </div>
              <div>
                <button>Checkout Now</button>
              </div>
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
