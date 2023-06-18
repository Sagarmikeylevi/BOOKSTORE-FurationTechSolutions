import { useParams } from "react-router-dom";
import BookOrder from "../components/BookOrder";
import { useSelector } from "react-redux";

const Order = () => {
  const { bookID } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === parseInt(bookID));
  console.log(book);
  return <BookOrder book={book} />;
};

export default Order;
