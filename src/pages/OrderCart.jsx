import { lazy, Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
const Cart = lazy(() => import("../components/Cart"));
import { useEffect, useState } from "react";
import { getAuthToken, getUser } from "../util/auth";

const OrderCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      const token = getAuthToken();
      const user = getUser();
      try {
        const response = await axios.get(
          `https://bookstore-api12.onrender.com/api/cart/getBooks/${user}`,
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
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin mr-2" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <FaSpinner className="animate-spin mr-2" />
          <p>Loading...</p>
        </div>
      }
    >
      <Cart items={cartItems} />
    </Suspense>
  );
};

export default OrderCart;
