import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Harry_Porter from "../assets/Harry_Porter.webp";
import alchemist from "../assets/alchemist.jpg";
import Ikigai from "../assets/Ikigai.jpg";

const FeaturedProduct = () => {
  const books = [
    {
      id: 1,
      imageURL: Harry_Porter,
      title: "Harry Porter",
      price: "$120",
    },
    {
      id: 2,
      imageURL: alchemist,
      title: "Alchemist",
      price: "$78",
    },
    {
      id: 3,
      imageURL: Ikigai,
      title: "Ikigai",
      price: "$68",
    },
  ];
  return (
    <div
      id="featured"
      className="p-4 mb-16 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl mb-12 relative z-40">
        Featured Products
        <span className="absolute left-[38%] right-0 bottom-[-1rem] w-[25%] h-1 bg-gray-400 rounded"></span>
      </h1>

      <div className="flex felx-row text-4xl mb-8 gap-12 text-gray-400">
        <FaChevronLeft className="cursor-pointer text-black" />
        <FaChevronRight className="cursor-pointer" />
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {books.map((book) => (
          <div className="w-60 flex flex-col" key={book.id}>
            <img
              className="h-72 w-full rounded-sm shadow-lg"
              src={book.imageURL}
              alt=""
            />
            <div className="w-full flex flex-row justify-between items-center">
              <div className="mt-2 flex flex-col">
                <h1 className="font-semibold text-gray-700">{book.title}</h1>
                <p className="font-bold">{book.price}</p>
              </div>
              <div className="h-12 w-12 cursor-pointer flex justify-center items-center hover:bg-teal-400 rounded-md shadow-sm transition duration-300 ease-in-out group">
                <img
                  className="h-6 w-6 group-hover:h-8 group-hover:w-8"
                  src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
