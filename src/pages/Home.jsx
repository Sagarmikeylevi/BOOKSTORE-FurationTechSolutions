import Author from "../components/Author";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroSection from "../components/HeroSection";
import BookGenres from "../components/BookGenres";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
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

  return (
    <>
      <HeroSection />
      <Author />
      <BookGenres />
      <FeaturedProduct books={data.data.books} />
      <NewsletterSubscription />
    </>
  );
};

export default Home;
