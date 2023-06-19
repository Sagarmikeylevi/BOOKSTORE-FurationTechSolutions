import React from "react";
import { FaChevronRight, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import alchemist from "../assets/alchemist.jpg";

const Cart = () => {
  return (
    <div className="min-h-[100vh] h-auto pt-20 w-full">
      <div className="w-[90%] ml-[5%]  flex flex-row justify-between items-center">
        {/* Breadcrumb */}
        <div className="p-2 pr-4 rounded flex flex-row items-center sm:text-lg before:w-2 before:h-4 before:bg-slate-600 before:mr-2 bg-[#e6e6e6]">
          <p className="font-medium text-slate-500 mr-2 cursor-pointer">Home</p>
          <FaChevronRight className="mt-1 text-slate-400 mr-2" />
          <p className="font-semibold text-slate-600 cursor-pointer">Cart</p>
        </div>
      </div>

      <div className="mt-16 w-[90%] ml-[5%] mb-16 flex flex-col gap-16 justify-center items-center md:flex-row">
        {/* Cart Items */}
        <div className="flex flex-col w-full">
          {/* part-1 */}
          <div className="h-36 w-full flex flex-row items-center mb-2 justify-center">
            <div className="w-6 h-6 border-[2px] border-gray-400 rounded-md grid place-content-center sm:w-8 sm:h-8 cursor-pointer">
              <FaCheck className="text-sm font-extralight text-gray-600 sm:text-base" />
            </div>
            <div className="h-full ml-[5%] w-[90%] rounded-md flex flex-row items-center border-[1px] border-gray-400 justify-between sm:w-[80%] pl-4 pr-4 lg:pl-8 lg:pr-8 md:w-[90%] lg:w-[80%]">
              <div className="h-full w-full flex flex-row items-center">
                <img
                  className="h-4/5 w-20 rounded-md sm:w-28"
                  src={alchemist}
                  alt=""
                />
                <div className="ml-2 mt-[-1rem] sm:ml-4">
                  <h1 className="text-sm font-semibold text-gray-700 sm:text-base">
                    The ALCHEMIST
                  </h1>
                  <p className="text-xs font-semibold text-gray-500 sm:text-sm">
                    Paulo Coelho
                  </p>
                  <p className="font-semibold mt-2 text-gray-700 text-sm sm:text-base">
                    $ 78
                  </p>
                </div>
              </div>

              <div className="flex flex-row h-4/5 justify-center ml-8 items-center gap-4">
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaPlus className="text-gray-600 text-sm" />
                </div>
                <p className="font-semibold">1</p>
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaMinus className="text-gray-600 text-sm" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* part-1 */}
          <div className="h-36 w-full flex flex-row items-center mb-2 justify-center">
            <div className="w-6 h-6 border-[2px] border-gray-400 rounded-md grid place-content-center sm:w-8 sm:h-8 cursor-pointer">
              <FaCheck className="text-sm font-extralight text-gray-600 sm:text-base" />
            </div>
            <div className="h-full ml-[5%] w-[90%] rounded-md flex flex-row items-center border-[1px] border-gray-400 justify-between sm:w-[80%] pl-4 pr-4 lg:pl-8 lg:pr-8 md:w-[90%] lg:w-[80%]">
              <div className="h-full w-full flex flex-row items-center">
                <img
                  className="h-4/5 w-20 rounded-md sm:w-28"
                  src={alchemist}
                  alt=""
                />
                <div className="ml-2 mt-[-1rem] sm:ml-4">
                  <h1 className="text-sm font-semibold text-gray-700 sm:text-base">
                    The ALCHEMIST
                  </h1>
                  <p className="text-xs font-semibold text-gray-500 sm:text-sm">
                    Paulo Coelho
                  </p>
                  <p className="font-semibold mt-2 text-gray-700 text-sm sm:text-base">
                    $ 78
                  </p>
                </div>
              </div>

              <div className="flex flex-row h-4/5 justify-center ml-8 items-center gap-4">
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaPlus className="text-gray-600 text-sm" />
                </div>
                <p className="font-semibold">1</p>
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaMinus className="text-gray-600 text-sm" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* part-1 */}
          <div className="h-36 w-full flex flex-row items-center mb-2 justify-center">
            <div className="w-6 h-6 border-[2px] border-gray-400 rounded-md grid place-content-center sm:w-8 sm:h-8 cursor-pointer">
              <FaCheck className="text-sm font-extralight text-gray-600 sm:text-base" />
            </div>
            <div className="h-full ml-[5%] w-[90%] rounded-md flex flex-row items-center border-[1px] border-gray-400 justify-between sm:w-[80%] pl-4 pr-4 lg:pl-8 lg:pr-8 md:w-[90%] lg:w-[80%]">
              <div className="h-full w-full flex flex-row items-center">
                <img
                  className="h-4/5 w-20 rounded-md sm:w-28"
                  src={alchemist}
                  alt=""
                />
                <div className="ml-2 mt-[-1rem] sm:ml-4">
                  <h1 className="text-sm font-semibold text-gray-700 sm:text-base">
                    The ALCHEMIST
                  </h1>
                  <p className="text-xs font-semibold text-gray-500 sm:text-sm">
                    Paulo Coelho
                  </p>
                  <p className="font-semibold mt-2 text-gray-700 text-sm sm:text-base">
                    $ 78
                  </p>
                </div>
              </div>

              <div className="flex flex-row h-4/5 justify-center ml-8 items-center gap-4">
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaPlus className="text-gray-600 text-sm" />
                </div>
                <p className="font-semibold">1</p>
                <div className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4">
                  <FaMinus className="text-gray-600 text-sm" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>

        {/* Summary */}
        <div className="w-2/5 h-auto flex flex-col justify-center items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Subtotal</h1>
            <p className="font-semibold text-gray-600">$ 900</p>
          </div>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Discount</h1>
            <p className="font-semibold text-gray-600">$ 0</p>
          </div>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Shipment</h1>
            <p className="font-semibold text-gray-600">$ 20</p>
          </div>
          <span className="mt-4 w-full h-[2px] bg-gray-400"></span>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-600">Grand Total</h1>
            <p className="font-semibold text-gray-700">$ 20</p>
          </div>

          <button className="mt-6 bg-black text-gray-200 p-2 pl-6 pr-6 rounded hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out cursor-pointer text-sm md:text-base">
            Checkout now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
