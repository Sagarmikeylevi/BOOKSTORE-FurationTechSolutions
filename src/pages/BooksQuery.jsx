import { useLocation } from "react-router-dom";
import ShowBooks from "../components/ShowBooks";
import useFetchData from "../hooks/useFetchData";

const BooksQuery = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const { data, isLoading, error } = useFetchData(
    "http://localhost:8000/api/book/getbooks"
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

  let filteredBooks = data.data.books;
  let pageName = "Books";

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
