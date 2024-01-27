import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
import Author from "../components/Author";
import BookGenres from "../components/BookGenres";
import FeaturedBooks from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import LoaderSpinner from "../components/UI/Loader";
import { fetchBooks, queryClient } from "../http";

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner message="Loading..." />}>
        <HeroSection />
      </Suspense>

      <Author />
      <BookGenres />
      <FeaturedBooks />
      <NewsletterSubscription />
    </>
  );
};

export default Home;

export const Loader = () => {
  return queryClient.fetchQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
};
