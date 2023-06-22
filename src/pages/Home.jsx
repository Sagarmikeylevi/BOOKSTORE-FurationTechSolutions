import Author from "../components/Author";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroSection from "../components/HeroSection";
import BookGenres from "../components/BookGenres";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Author />
      <BookGenres />
      <FeaturedProduct />
      <NewsletterSubscription />
    </>
  );
};

export default Home;
