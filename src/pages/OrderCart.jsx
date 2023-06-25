import Cart from "../components/Cart";
import useFetchData from "../hooks/useFetchData";

const OrderCart = () => {
  const { data, isLoading, error } = useFetchData(
    "http://localhost:8000/api/cart/getBooks"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return <Cart items={data.data.cartItems} />;
};

export default OrderCart;
