import axios from "axios";
import Cart from "../components/Cart";
import { useEffect, useState } from "react";
import { getAuthToken } from "../util/auth";

const OrderCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      const token = getAuthToken();
      try {
        const response = await axios.get(
          "http://localhost:8000/api/cart/getBooks",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        setCartItems(response.data.data.cartItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCartItems();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <Cart items={cartItems} />;
};

export default OrderCart;
