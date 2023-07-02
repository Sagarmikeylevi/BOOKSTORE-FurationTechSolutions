import { lazy, Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const HeroSection = lazy(() => import("../components/HeroSection"));
const Author = lazy(() => import("../components/Author"));
const BookGenres = lazy(() => import("../components/BookGenres"));
const FeaturedProduct = lazy(() => import("../components/FeatutedBooks"));
import NewsletterSubscription from "../components/NewsletterSubscription";

import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const { data, isLoading, error } = useFetchData(
    "http://localhost:8000/api/book/getbooks"
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
    <>
      <Suspense
        fallback={
          <div className="pt-24 flex justify-center items-center">
            <FaSpinner className="animate-spin mr-2" />
            <p>Loading...</p>
          </div>
        }
      >
        <HeroSection />
        <Author />
        <BookGenres />
        <FeaturedProduct books={data.data.books} />
      </Suspense>

      <NewsletterSubscription />
    </>
  );
};

export default Home;
