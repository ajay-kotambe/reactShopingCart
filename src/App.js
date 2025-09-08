import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <div className="bg-slate-900  ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
