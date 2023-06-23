import { useLoaderData, json } from "react-router-dom";
import Author from "../components/Author";
import FeaturedProduct from "../components/FeatutedBooks";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroSection from "../components/HeroSection";
import BookGenres from "../components/BookGenres";

const Home = () => {
  const data = useLoaderData();

  const books = data.data.books;

  console.log(books);
  return (
    <>
      <HeroSection />
      <Author />
      <BookGenres />
      <FeaturedProduct books={books} />
      <NewsletterSubscription />
    </>
  );
};

export default Home;

export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/book/getbooks");

    if (!response.ok) {
      throw json({ message: "Could not fetch events" }, { status: 500 });
    }

    return response;
  } catch (error) {
    // Handle error here
    console.error("Error loading books:", error);
  }
};
