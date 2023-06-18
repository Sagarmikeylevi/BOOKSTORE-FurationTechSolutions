import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  let Total = 0; // Variable to store the total cost of items in the cart

  const handleRemoveItem = (id) => {
    // Dispatch an action to remove an item from the cart
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="pt-20 w-full min-h-[100vh] h-auto grid place-items-center">
      {items.length > 0 ? (
        <div className="flex w-full flex-col gap-2 md:w-4/5 h-full">
          {items.map((item) => {
            item.totalPrice;
            Total += item.totalPrice;

            return (
              <div
                key={item.id}
                className="w-full flex items-center justify-between bg-white shadow-md rounded-md p-4 mb-4 h-[40%] overflow-y-auto"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    className="h-12 w-12 object-contain mr-4"
                  />
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-gray-600">${item.totalPrice}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mx-2">
                    {`Number of books: ${item.quantity}`}
                  </span>
                </div>
                <button
                  className="text-red-500 focus:outline-none"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove by 1
                </button>
              </div>
            );
          })}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <p className="text-gray-600">Total Cost: ${Total}</p>
            <p className="text-gray-600">Shipment Cost: $20</p>
            <p className="text-xl font-bold">Grand Total: ${Total + 20}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
