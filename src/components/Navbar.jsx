import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="flex flex-row justify-between h-35px ">
        <NavLink to="/">
          <div>
            <img src={logo} alt="logoImage" className="h-14" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <span>{cart.length}</span>
              <FaCartShopping />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
