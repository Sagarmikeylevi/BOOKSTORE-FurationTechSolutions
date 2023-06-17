import { createSlice } from "@reduxjs/toolkit";
import alchemist from "../assets/alchemist.jpg";
import Ikigai from "../assets/Ikigai.jpg";
import Harry_Porter from "../assets/Harry_Porter.webp";

const bookSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      imageURL: alchemist,
      title: "THE ALCHEMIST",
      author: "Paulo Coelho",
      summary:
        "The Alchemist is a novel by Brazilian author Paulo Coelho. It follows the journey of Santiago, a young Andalusian shepherd, who dreams of finding a treasure in the Egyptian pyramids. Guided by various spiritual encounters and omens, Santiago learns valuable life lessons about following his dreams, embracing the present moment, and listening to his heart.",
      price: "$78",
      genres: ["Fiction", "Adventure", "Philosophical"],
      featured: "yes",
      bestSeller: "yes",
    },
    {
      id: 2,
      imageURL: Ikigai,
      title: "Ikigai",
      author: "Hector Garcia and Francesc Miralles",
      summary:
        "Ikigai is a self-help book that explores the concept of finding purpose and fulfillment in life. It combines the Japanese concepts of ikigai (meaning 'reason for being') and the pursuit of a meaningful and happy life. The book offers practical advice, inspirational stories, and exercises to help readers discover their passions, strengths, and unique ikigai.",
      price: "$72",
      genres: ["Self-Help", "Personal Development"],
      featured: "yes",
      bestSeller: "yes",
    },
    {
      id: 3,
      imageURL: Harry_Porter,
      title: "Harry Potter",
      author: "J.K. Rowling",
      summary:
        "Harry Potter is a fantasy series written by British author J.K. Rowling. It follows the adventures of Harry Potter, a young wizard, and his friends Hermione Granger and Ron Weasley, as they attend Hogwarts School of Witchcraft and Wizardry. The series spans seven books, chronicling Harry's journey as he battles dark forces, uncovers secrets about his past, and ultimately confronts the powerful Dark wizard Lord Voldemort.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: "yes",
      bestSeller: "yes",
    },
  ],
  reducers: {
    // I am not adding any reducers here because I am not handling the admin part here
  },
});

export default bookSlice;
