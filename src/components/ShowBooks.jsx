import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const ShowBooks = ({ books, pageName }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-[120vh] w-full grid place-items-center">
      <div className="w-[90%] pt-20 flex flex-row justify-between items-center">
        <div className="p-2 rounded flex flex-row items-center sm:text-lg before:w-2 before:h-4 before:bg-slate-600 before:mr-2 bg-[#e6e6e6]">
          <p className="font-medium text-slate-500 mr-2 cursor-pointer">Home</p>
          <FaChevronRight className="mt-1 text-slate-400 mr-2" />
          <p className="font-semibold text-slate-600 cursor-pointer">
            {pageName}
          </p>
        </div>
        <div className="p-4 w-60 h-10 flex flex-row items-center border-[1px] border-gray-700 rounded sm:w-80 hover:bg-gray-100 hover:border-gray-800">
          <img
            className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="font-semibold h-10 bg-transparent border-none outline-none"
          />
        </div>
      </div>

      <div className="w-4/5 mt-16 mb-16 grid grid-flow-col gap-10 place-items-center overflow-x-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full cursor-pointer">
        {filteredBooks.map((book) => (
          <div className="w-64 flex flex-col mb-8" key={book.id}>
            <img
              className="h-72 w-full rounded-sm shadow-sm"
              src={book.imageURL}
              alt=""
            />
            <div className="w-full flex flex-row justify-between items-center">
              <div className="mt-2 flex flex-col">
                <h1 className="font-semibold text-gray-700 md:text-lg">
                  {book.title.length > 20
                    ? book.title.slice(0, 17) + "..."
                    : book.title}
                </h1>
                <p className="font-bold md:text-lg">{book.price}</p>
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

export default ShowBooks;
