import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <NavLink to="/" style={{ display: "block" }}>
          <div>
            <img src={logo} alt="" height="36px" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaCartShopping />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
