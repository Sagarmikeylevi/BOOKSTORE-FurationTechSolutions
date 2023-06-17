import { createSlice } from "@reduxjs/toolkit";
import alchemist from "../assets/alchemist.jpg";
import Ikigai from "../assets/Ikigai.jpg";
import Harry_Porter from "../assets/Harry_Porter.webp";
import Dracula from "../assets/Dracula.webp";
import LordOfTheRings from "../assets/LordOfTheRings.webp";
import Atomic_Habits from "../assets/Aotmic_Habits.jpg";

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
      featured: true,
      bestSeller: false,
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
      bestSeller: false,
    },
    {
      id: 3,
      imageURL: Harry_Porter,
      title: "HARRY POTTER",
      author: "J.K. Rowling",
      summary:
        "Harry Potter is a fantasy series written by British author J.K. Rowling. It follows the adventures of Harry Potter, a young wizard, and his friends Hermione Granger and Ron Weasley, as they attend Hogwarts School of Witchcraft and Wizardry. The series spans seven books, chronicling Harry's journey as he battles dark forces, uncovers secrets about his past, and ultimately confronts the powerful Dark wizard Lord Voldemort.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: true,
      bestSeller: false,
    },
    {
      id: 4,
      imageURL: Dracula,
      title: "DRACULA",
      author: "Bram Stoker",
      summary:
        "Dracula is a Gothic horror novel written by Irish author Bram Stoker. It tells the story of Count Dracula, a vampire from Transylvania, who moves to England to spread the undead curse and seek new blood. The novel is presented through a collection of journal entries, letters, and newspaper clippings, as various characters battle against the dark forces of Dracula.",
      price: "$90",
      genres: ["Gothic", "Horror"],
      featured: true,
      bestSeller: false,
    },
    {
      id: 5,
      imageURL: LordOfTheRings,
      title: "THE LORD OF THE RINGS",
      author: "J.R.R. Tolkien",
      summary:
        "The Lord of the Rings is an epic fantasy trilogy written by J.R.R. Tolkien. The story follows the quest of a group of characters, including Frodo Baggins, as they journey across the fictional world of Middle-earth to destroy the One Ring and defeat the Dark Lord Sauron. The trilogy explores themes of heroism, friendship, sacrifice, and the battle between good and evil.",
      price: "$110",
      genres: ["Fantasy", "Adventure"],
      featured: true,
      bestSeller: false,
    },
    {
      id: 6,
      imageURL: Atomic_Habits,
      title: "ATOMIC HABITS",
      author: "James Clear",
      summary:
        "Atomic Habits is a self-help book written by James Clear. It provides practical strategies for creating and breaking habits that can lead to personal and professional success. The book explores the concept of small, incremental changes, referred to as atomic habits, and how they can compound over time to produce remarkable results. It offers insights on how to build good habits, eliminate bad ones, and make lasting changes.",
      price: "$110",
      genres: ["Self-Help", "Personal Development"],
      featured: true,
      bestSeller: false,
    },
  ],
  reducers: {
    // I am not adding any reducers here because I am not handling the admin part here
  },
});

export default bookSlice;
