import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCartIndicator = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <p className="text-xl font-semibold text-gray-700">
        Your cart is empty!
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white font-bold px-6 py-3 rounded-md hover:bg-green-700 transition"
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default EmptyCartIndicator;
