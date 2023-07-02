import { lazy, Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
const BookOrder = lazy(() => import("../components/BookOrder"));
import useFetchData from "../hooks/useFetchData";

const Order = () => {
  const { bookID } = useParams();
  const { data, isLoading, error } = useFetchData(
    `http://localhost:8000/api/book/getbook/${bookID}`
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin mr-2" />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
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
      <BookOrder book={data.data.book} />
    </Suspense>
  );
};

export default Order;
