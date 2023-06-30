import axios from "axios";
import Cart from "../components/Cart";
import { useEffect, useState } from "react";
import { getAuthToken, getUser } from "../util/auth";
import { CircleLoader } from "react-spinners";

const OrderCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      const token = getAuthToken();
      const user = getUser();
      try {
        const response = await axios.get(
          `http://localhost:8000/api/cart/getBooks/${user}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setCartItems(response.data.data.items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCartItems();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircleLoader color="#4C51BF" loading={true} size={80} />
      </div>
    );
  }

  return <Cart items={cartItems} />;
};

export default OrderCart;
