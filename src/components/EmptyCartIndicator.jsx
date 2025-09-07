import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCartIndicator = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p> Cart is Empty</p>
      </div>
      <button onClick={() => navigate("/")}>Shop Now</button>
    </div>
  );
};

export default EmptyCartIndicator;
