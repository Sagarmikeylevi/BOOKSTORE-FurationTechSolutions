import Author from "../components/Author";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroSection from "../components/heroSection";
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
