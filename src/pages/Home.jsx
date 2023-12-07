import { lazy, Suspense } from "react";
import { FaSpinner } from "react-icons/fa";
import useFetchData from "../hooks/useFetchData";

import HeroSection from "../components/HeroSection";
// Lazy-loaded components
const Author = lazy(() => import("../components/Author"));
const BookGenres = lazy(() => import("../components/BookGenres"));
const FeaturedProduct = lazy(() => import("../components/FeatutedBooks"));
import NewsletterSubscription from "../components/NewsletterSubscription";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <FaSpinner className="animate-spin mr-2" />
    <p>Loading...</p>
  </div>
);

const Home = () => {
  const { data, isLoading, error } = useFetchData(
    "https://bookstore-api12.onrender.com/api/book/getbooks"
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <Author />
        <BookGenres />
        <FeaturedProduct books={data.data.books} />
      </Suspense>

      <NewsletterSubscription />
    </>
  );
};

export default Home;
