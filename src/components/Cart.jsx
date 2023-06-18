import React from "react";
import alchemist from "../assets/alchemist.jpg";
import Ikigai from "../assets/Ikigai.jpg";
import Harry_Porter from "../assets/Harry_Porter.webp";

const Cart = () => {
  const items = [
    {
      id: 1,
      imageURL: alchemist,
      title: "THE ALCHEMIST",
      author: "Paulo Coelho",
      summary:
        "The Alchemist is a novel by Brazilian author Paulo Coelho. It follows the journey of Santiago, a young Andalusian shepherd, who dreams of finding a treasure in the Egyptian pyramids. Guided by various spiritual encounters and omens, Santiago learns valuable life lessons about following his dreams, embracing the present moment, and listening to his heart.",
      price: "$78",
      genres: ["Fiction", "Adventure", "Philosophical"],
      featured: true,
      bestSeller: true,
    },
    {
      id: 2,
      imageURL: Ikigai,
      title: "IKIGAI",
      author: "Hector Garcia and Francesc Miralles",
      summary:
        "Ikigai is a self-help book that explores the concept of finding purpose and fulfillment in life. It combines the Japanese concepts of ikigai (meaning 'reason for being') and the pursuit of a meaningful and happy life. The book offers practical advice, inspirational stories, and exercises to help readers discover their passions, strengths, and unique ikigai.",
      price: "$72",
      genres: ["Self-Help", "Personal Development"],
      featured: true,
      bestSeller: true,
    },
    {
      id: 3,
      imageURL: Harry_Porter,
      title: "HARRY POTTER AND THE SORCERER'S STONE",
      author: "J.K. Rowling",
      summary:
        "Harry Potter is a fantasy series written by British author J.K. Rowling. It follows the adventures of Harry Potter, a young wizard, and his friends Hermione Granger and Ron Weasley, as they attend Hogwarts School of Witchcraft and Wizardry. The series spans seven books, chronicling Harry's journey as he battles dark forces, uncovers secrets about his past, and ultimately confronts the powerful Dark wizard Lord Voldemort.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: true,
      bestSeller: false,
    },
    {
      id: 3,
      imageURL: Harry_Porter,
      title: "HARRY POTTER AND THE SORCERER'S STONE",
      author: "J.K. Rowling",
      summary:
        "Harry Potter is a fantasy series written by British author J.K. Rowling. It follows the adventures of Harry Potter, a young wizard, and his friends Hermione Granger and Ron Weasley, as they attend Hogwarts School of Witchcraft and Wizardry. The series spans seven books, chronicling Harry's journey as he battles dark forces, uncovers secrets about his past, and ultimately confronts the powerful Dark wizard Lord Voldemort.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: true,
      bestSeller: false,
    },
  ];

  return (
    <div className="pt-20 w-full min-h-[100vh] h-auto grid place-items-center">
      {items.length > 0 ? (
        <div className="flex w-full flex-col gap-2 md:w-4/5 h-full">
          {items.map((item) => (
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
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="text-gray-600 focus:outline-none">-</button>
                <span className="mx-2">10</span>
                <button className="text-gray-600 focus:outline-none">+</button>
              </div>
              <button className="text-red-500 focus:outline-none">
                Remove
              </button>
            </div>
          ))}
          <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <p className="text-gray-600">Total Cost: $100</p>
            <p className="text-gray-600">Shipment Cost: $20</p>
            <p className="text-xl font-bold">Grand Total: $30</p>
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
