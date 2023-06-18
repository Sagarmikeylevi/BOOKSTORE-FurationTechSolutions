import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShowBooks from "../components/ShowBooks";

const BooksQuery = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  let filteredBooks = useSelector((state) => state.books);

  console.log(query);

  if (query === "William Shakespeare") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "William Shakespeare"
    );
  } else if (query === "Agatha Christie") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "Agatha Christie"
    );
  } else if (query === "J.K. Rowling") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "J.K. Rowling"
    );
  } else if (query === "Dan Brown") {
    filteredBooks = filteredBooks.filter((book) => book.author === "Dan Brown");
  } else if (query === "Stephen King") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "Stephen King"
    );
  } else if (query === "All Books") {
    filteredBooks = filteredBooks;
  } else if (query === "Best Sellers") {
    filteredBooks = filteredBooks.filter((book) => book.bestSeller === true);
  } else {
    return <h1>Error</h1>
  }

  return <ShowBooks books={filteredBooks} />;
};

export default BooksQuery;
