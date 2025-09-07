import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../Data";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      const data = res.data;

      setPosts(data);
    } catch (error) {
      toast.error("Error while fetching data..!");
      setPosts([]);
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
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <div>
          <p>No Data Found..!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
