import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
const Cart = React.lazy(() => import("../components/Cart"));
import { cartOrder, queryClient } from "../http";
import LoaderSpinner from "../components/UI/Loader";
import Error from "../components/UI/error/Error";

const OrderCart = () => {
  const {
    data: cartItems,
    isError,
    error,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: cartOrder,
  });

  if (isError) {
    console.log(error);
    return <Error message="Error fetching cart items" />;
  }
  return (
    <Suspense fallback={<LoaderSpinner message="Loading cart items..." />}>
      <Cart items={cartItems} />
    </Suspense>
  );
};

export default OrderCart;

export const Loader = () => {
  return queryClient.fetchQuery({
    queryKey: ["cartItems"],
    queryFn: cartOrder,
  });
};
