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

  const authors = [
    "William Shakespeare",
    "Agatha Christie",
    "J.K. Rowling",
    "Dan Brown",
    "Stephen King",
  ];

  const genres = [
    "Adventure",
    "Self-Help",
    "Horror",
    "Fantasy",
    "Drama",
    "Thriller",
  ];

  if (authors.includes(query)) {
    filteredBooks = filteredBooks.filter((book) => book.author === query);
    pageName = "Author";
  } else if (query === "All Books") {
    filteredBooks = filteredBooks;
    pageName = "Books";
  } else if (query === "Best Sellers") {
    filteredBooks = filteredBooks.filter((book) => book.bestSeller === true);
    pageName = "Best Sellers";
  } else if (genres.includes(query)) {
    filteredBooks = filteredBooks.filter((book) => book.genres.includes(query));
    pageName = query;
  } else {
    return <p>Error: "Are you serious right now bro ?"</p>;
  }

  return <ShowBooks books={filteredBooks} pageName={pageName} />;
};

export default BooksQuery;
