import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";

const BookOrder = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      id: book.id,
      title: book.title,
      price: 70,
      imageURL: book.imageURL,
      quantity: quantity,
    };
    dispatch(cartActions.addItemToCart(newItem));
  };

  return (
    <div className="pt-20 h-auto w-full mb-16">
      <div className="ml-[5%] p-2 max-w-[20rem] rounded flex flex-row items-center sm:text-lg before:w-2 before:h-4 before:bg-slate-600 before:mr-2 bg-[#e6e6e6]">
        <p className="font-medium text-slate-500 mr-2 cursor-pointer">Home</p>
        <FaChevronRight className="mt-1 text-slate-400 mr-2" />
        <p className="font-medium text-slate-500 mr-2 cursor-pointer">Order</p>
        <FaChevronRight className="mt-1 text-slate-400 mr-2" />
        <p className="font-semibold text-slate-600 cursor-pointer">Book</p>
      </div>
      <div className="mt-12 mb-16 flex-col">
        <div className="flex flex-row justify-center items-center gap-8 md:gap-12">
          <img
            className="h-[12rem] w-[10rem] rounded md:h-[15rem] md:w-[12rem] lg:h-[18rem] lg:w-[15rem]"
            src={book.imageURL}
            alt=""
          />
          <div className="h-[12rem] md:h-[15rem] lg:h-[16rem] lg:mt-[1rem]">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
              {book.title}
            </h1>

            <p className="mt-2 md:mt-4 font-semibold text-gray-800 md:text-lg lg:text-xl">
              {`$${book.price}`}
            </p>

            <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg font-semibold text-gray-500">
              Only 10 left <span className="text-sm">in Stocks</span>
            </p>
            <div className="mt-2 flex flex-col gap-8">
              <div className="flex flex-row items-center space-x-4">
                <div
                  className="p-2 md:p-4 bg-[#e6e6e6] rounded"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  <FaMinus className="cursor-pointer text-gray-500 text-xs" />
                </div>
                <span className="font-bold text-gray-600 md:text-lg">
                  {quantity}
                </span>
                <div
                  className="p-2 md:p-4 bg-[#e6e6e6] rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FaPlus className="cursor-pointer text-gray-500 text-xs" />
                </div>
              </div>
              <button
                className="p-3 bg-black text-white rounded hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out cursor-pointer text-sm md:text-base"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center lg:mt-14">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl mb-6 bg-[#e6e6e6] p-4 rounded shadow-lg">
            Details
          </h1>
          <div className="w-4/5">
            <h1 className="text-xl mb-4 font-semibold lg:text-2xl">
              {book.title}{" "}
              <span className="text-base font-thin lf:text-lg">
                - {book.author}
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg">{book.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOrder;
