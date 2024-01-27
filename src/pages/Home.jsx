import { lazy, Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const HeroSection = lazy(() => import("../components/HeroSection"));
// Lazy-loaded components
import Author from "../components/Author";
import BookGenres from "../components/BookGenres";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <FaSpinner className="animate-spin mr-2" />
    <p>Loading...</p>
  </div>
);

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>

      <Author />
      <BookGenres />
      <FeaturedProduct />

      <NewsletterSubscription />
    </>
  );
};

export default Home;
