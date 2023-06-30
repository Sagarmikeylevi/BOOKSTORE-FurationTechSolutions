import { FaChevronRight, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { getAuthToken, getUser } from "../util/auth";

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState(items);
  let totalPrice = 0;
  const shipment = 20;

  const updateData = async (mode, id) => {
    try {
      const token = getAuthToken();
      const response = await axios.put(
        `http://localhost:8000/api/cart/update/${id}`,
        {
          mode: mode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId && item.totalQty > 0) {
        const newTotalQty = item.totalQty - 1;
        const newQty = item.Qty + 1;
        updateData("plus", itemId);
        return { ...item, totalQty: newTotalQty, Qty: newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId && item.Qty > 1) {
        const newTotalQty = item.totalQty + 1;
        const newQty = item.Qty - 1;
        updateData("minus", itemId);
        return { ...item, totalQty: newTotalQty, Qty: newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const deleteItemHandler = async (itemId) => {
    const token = getAuthToken();
    const user = getUser();
    const response = await axios.delete(
      `http://localhost:8000/api/cart/delete/${itemId}/${user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(response.data);
  };

  // Calculate the total price
  cartItems.forEach((item) => {
    totalPrice += item.price * item.Qty;
  });

  let discount = Math.round(totalPrice * 0.05);

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
          {cartItems.map((item) => (
            <div
              className="h-32 w-full flex flex-row items-center mb-4 justify-center"
              key={item._id}
            >
              <div className="h-full ml-[5%] w-[90%] rounded-md flex flex-row items-center border-[1px] border-gray-400 justify-between sm:w-[80%] pl-4 pr-4 lg:pl-8 lg:pr-8 md:w-[90%] lg:w-[80%] relative">
                <div className="h-full w-full flex flex-row items-center">
                  <img
                    className="h-4/5 w-20 rounded-md sm:w-28"
                    src={`http://localhost:8000/uploads/images/${item.imageURL}`}
                    alt=""
                  />
                  <div className="ml-2 mt-[-1rem] sm:ml-4">
                    <h1 className="text-sm font-semibold text-gray-700 sm:text-base">
                      {item.title}
                    </h1>
                    <p className="text-xs font-semibold text-gray-500 sm:text-sm">
                      {item.author}
                    </p>
                    <p className="font-semibold mt-2 text-gray-700 text-sm sm:text-base">
                      $ {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row h-4/5 justify-center ml-8 items-center gap-4">
                  <div
                    className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4"
                    onClick={() => increaseQuantity(item._id)}
                  >
                    <FaPlus className="text-gray-600 text-sm" />
                  </div>
                  <p className="font-semibold">{item.Qty}</p>
                  <div
                    className="bg-[#e6e6e6] p-2 rounded-md cursor-pointer sm:p-4"
                    onClick={() => decreaseQuantity(item._id)}
                  >
                    <FaMinus className="text-gray-600 text-sm" />
                  </div>
                </div>
                <button
                  className="absolute top-0 right-0 mt-2 mr-2  text-gray-700 font-bold text-xs sm:text-sm"
                  onClick={() => deleteItemHandler(item._id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-2/5 h-auto flex flex-col justify-center items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Subtotal</h1>
            <p className="font-semibold text-gray-600">$ {totalPrice}</p>
          </div>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Discount</h1>
            <p className="font-semibold text-gray-600">$ {discount}</p>
          </div>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-500">Shipment</h1>
            <p className="font-semibold text-gray-600">$ {shipment}</p>
          </div>
          <span className="mt-4 w-full h-[2px] bg-gray-400"></span>
          <div className="mt-2 w-full flex flex-row justify-between items-center">
            <h1 className="font-semibold text-gray-600">Grand Total</h1>
            <p className="font-semibold text-gray-700">
              $ {totalPrice - discount + shipment}
            </p>
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
