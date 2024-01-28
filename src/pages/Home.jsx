import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/HeroSection"));
import Author from "../components/Author";
import BookGenres from "../components/BookGenres";
import FeaturedBooks from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import LoaderSpinner from "../components/UI/Loader";

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner message="Loading..." />}>
        <HeroSection />
        <Author />
        <BookGenres />
        <FeaturedBooks />
        <NewsletterSubscription />
      </Suspense>
    </>
  );
};

export default Home;
