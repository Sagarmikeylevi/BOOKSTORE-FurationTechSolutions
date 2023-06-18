import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShowBooks from "../components/ShowBooks";

const BooksQuery = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  let filteredBooks = useSelector((state) => state.books);

  let pageName = "Books"; // Declare pageName using the let keyword

  if (query === "William Shakespeare") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "William Shakespeare"
    );
    pageName = "Author";
  } else if (query === "Agatha Christie") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "Agatha Christie"
    );
    pageName = "Author";
  } else if (query === "J.K. Rowling") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "J.K. Rowling"
    );
    pageName = "Author";
  } else if (query === "Dan Brown") {
    filteredBooks = filteredBooks.filter((book) => book.author === "Dan Brown");
  } else if (query === "Stephen King") {
    filteredBooks = filteredBooks.filter(
      (book) => book.author === "Stephen King"
    );
    pageName = "Author";
  } else if (query === "All Books") {
    filteredBooks = filteredBooks;
    pageName = "Books";
  } else if (query === "Best Sellers") {
    filteredBooks = filteredBooks.filter((book) => book.bestSeller === true);
    pageName = "Best Sellers";
  } else {
    return <h1>Error</h1>;
  }

  return <ShowBooks books={filteredBooks} pageName={pageName} />;
};

export default BooksQuery;
