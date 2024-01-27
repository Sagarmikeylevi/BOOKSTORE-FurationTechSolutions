import { useParams } from "react-router-dom";
import BookOrder from "../components/BookOrder";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecificBook } from "../http";
import LoaderSpinner from "../components/UI/Loader";
import Error from "../components/UI/error/Error";

const Order = () => {
  const { bookID } = useParams();

  const {
    data: book,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["books", { bookID: bookID }],
    queryFn: () => fetchSpecificBook(bookID),
  });

  if (isPending) {
    return <LoaderSpinner message="Fetching book details..." />;
  }

  if (isError) {
    console.log(error);
    return <Error message="Error in fetching book" />;
  }

  return <BookOrder book={book ? book : []} />;
};

export default Order;
