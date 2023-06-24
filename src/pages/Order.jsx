import { useParams } from "react-router-dom";
import BookOrder from "../components/BookOrder";
import useFetchData from "../hooks/useFetchData";

const Order = () => {
  const { bookID } = useParams();
  const { data, isLoading, error } = useFetchData(
    `http://localhost:8000/api/book/getbook/${bookID}`
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
  
  return <BookOrder book={data.data.book} />;
};

export default Order;
