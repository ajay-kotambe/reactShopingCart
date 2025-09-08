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
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        items.map((item) => <Product key={item.id} item={item} />)
      ) : (
        <div>
          <p>No Data Found..!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
