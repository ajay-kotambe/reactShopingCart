import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../Data";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      const data = res.data;

      setItems(data);
    } catch (error) {
      toast.error("Error while fetching data..!");
      setItems([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center align-middle mb-2">
      {loading ? (
        <div className="flex justify-center align-middle h-full w-screen">
          <Spinner />
        </div>
      ) : items.length > 0 ? (
        <div className="grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto  space-y-10 space-x-5 min-h-[80vh]">
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found..!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
