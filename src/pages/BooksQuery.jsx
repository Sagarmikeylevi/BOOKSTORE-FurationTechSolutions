import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchBooks } from "../http";
import LoaderSpinner from "../components/UI/Loader";
const ShowBooks = React.lazy(() => import("../components/ShowBooks"));

const BooksQuery = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const {
    data: books,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  let filteredBooks = [];
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
    filteredBooks = books?.filter((book) => book.author === query);
    pageName = "Author";
  } else if (query === "All Books") {
    filteredBooks = books ? books : [];
    pageName = "Books";
  } else if (query === "Best Sellers") {
    filteredBooks = books?.filter((book) => book.bestSeller === true);
    pageName = "Best Sellers";
  } else if (genres.includes(query)) {
    filteredBooks = books?.filter((book) => book.genres.includes(query));
    pageName = query;
  } else {
    return <p>Error: "Are you serious right now bro ?"</p>;
  }

  if (isPending) {
    return <LoaderSpinner message="Fetching books..." />;
  }

  if (isError) {
    console.log(error);
    return <Error message="Error feching books" />;
  }

  return (
    <Suspense fallback={<LoaderSpinner message="Loading books..." />}>
      <ShowBooks books={filteredBooks} pageName={pageName} />
    </Suspense>
  );
};

export default BooksQuery;
