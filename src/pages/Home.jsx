import Author from "../components/Author";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroSection from "../components/HeroSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Author />
      <FeaturedProduct />
      <NewsletterSubscription />
    </>
  );
};

export default Home;
