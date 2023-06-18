import { createSlice } from "@reduxjs/toolkit";
import alchemist from "../assets/alchemist.jpg";
import Ikigai from "../assets/Ikigai.jpg";
import Harry_Porter from "../assets/Harry_Porter.webp";
import Dracula from "../assets/Dracula.webp";
import LordOfTheRings from "../assets/LordOfTheRings.webp";
import Atomic_Habits from "../assets/Aotmic_Habits.jpg";
import Romio_Julient from "../assets/Romio_Julient.jpg";
import hamlet from "../assets/hamlet.jpg";
import Macbeth from "../assets/Macbeth.jpg";
import Othello from "../assets/Othello.webp";
import Murder_on_the_Orient_Express from "../assets/Murder.jpg";
import Harry_Potter_and_the_Philosopher from "../assets/Harry_Potter_and_the_Philosopher.jpg";
import Harry_Potter_and_the_Prisoner_of_Azkaban from "../assets/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg";
import The_Da_Vinci_Code from "../assets/The_Da_Vinci_Code.jpg";
import The_Shining from "../assets/The Shining.jpg";

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
      price: "$60",
      genres: ["Self-Help", "Personal Development"],
      featured: true,
      bestSeller: true,
    },
    {
      id: 7,
      imageURL: Romio_Julient,
      title: "ROMIO AND JULIET",
      author: "William Shakespeare",
      summary:
        "Romeo and Juliet is a tragic play written by William Shakespeare. It tells the story of two young lovers, Romeo Montague and Juliet Capulet, who belong to feuding families in Verona. Despite their families' enmity, Romeo and Juliet fall deeply in love and secretly marry. However, their love story is marked by fate, misunderstandings, and a series of tragic events that ultimately leads to their untimely deaths.",
      price: "$140",
      genres: ["Drama", "Tragedy"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 8,
      imageURL: hamlet,
      title: "HAMLET",
      author: "William Shakespeare",
      summary:
        "Hamlet is a tragic play written by William Shakespeare. It follows the story of Prince Hamlet, who seeks to avenge his father's murder after discovering that his uncle Claudius has taken the throne by killing the king. The play explores themes of revenge, betrayal, madness, and the complexity of human nature. Hamlet's internal struggles and philosophical contemplations make it one of Shakespeare's most renowned and influential works.",
      price: "$150",
      genres: ["Drama", "Tragedy"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 9,
      imageURL: Macbeth,
      title: "MACBETH",
      author: "William Shakespeare",
      summary:
        "Macbeth is a tragic play written by William Shakespeare. It portrays the story of Macbeth, a Scottish nobleman, who receives a prophecy from three witches that he will become the King of Scotland. Consumed by ambition and influenced by his wife, Lady Macbeth, Macbeth commits regicide to fulfill the prophecy. The play delves into themes of ambition, power, guilt, and the consequences of unchecked ambition.",
      price: "$130",
      genres: ["Drama", "Tragedy"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 10,
      imageURL: Othello,
      title: "OTHELLO",
      author: "William Shakespeare",
      summary:
        "Othello is a tragic play written by William Shakespeare. It tells the story of Othello, a Moorish general in the Venetian army, who falls victim to the manipulations of his ensign, Iago. Iago's jealousy and deceit lead Othello to doubt his wife, Desdemona, and ultimately results in tragic consequences. The play explores themes of jealousy, love, betrayal, and the destructive power of manipulation.",
      price: "$120",
      genres: ["Drama", "Tragedy"],
      featured: false,
      bestSeller: true,
    },
    {
      id: 11,
      imageURL: Murder_on_the_Orient_Express,
      title: "MURDER ON THE ORIENT EXPRESS",
      author: "Agatha Christie",
      summary:
        "Murder on the Orient Express is a detective novel written by Agatha Christie. It follows the renowned detective Hercule Poirot as he investigates a murder that occurs on the luxurious Orient Express train during a snowstorm. Poirot must unravel the complex web of clues and suspects to uncover the truth behind the murder. The book is known for its intricate plot, engaging characters, and unexpected twists.",
      price: "$120",
      genres: ["Mystery", "Crime", "Detective"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 12,
      imageURL: Harry_Potter_and_the_Philosopher,
      title: "HARRY POTTER AND THE PHILOSOPHER'S STONE",
      author: "J.K. Rowling",
      summary:
        "Harry Potter and the Philosopher's Stone is the first book in the Harry Potter series written by J.K. Rowling. It introduces the magical world of Harry Potter, a young wizard who discovers his true identity and begins his journey at Hogwarts School of Witchcraft and Wizardry. As Harry unravels the mysteries surrounding his past and battles against the dark forces, he learns about friendship, bravery, and the power of love.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 13,
      imageURL: Harry_Potter_and_the_Prisoner_of_Azkaban,
      title: "HARRY POTTER AND THE PRISONER OF AZKABAN",
      author: "J.K. Rowling",
      summary:
        "Harry Potter and the Prisoner of Azkaban is the third book in the Harry Potter series written by J.K. Rowling. In this installment, Harry returns to Hogwarts School of Witchcraft and Wizardry for his third year. As he faces new challenges and encounters a dangerous escaped prisoner named Sirius Black, Harry discovers the truth about his past and the dark secrets that surround him.",
      price: "$120",
      genres: ["Fantasy", "Young Adult"],
      featured: false,
      bestSeller: true,
    },
    {
      id: 15,
      imageURL: The_Da_Vinci_Code,
      title: "THE DA VINCI CODE",
      author: "Dan Brown",
      summary:
        "The Da Vinci Code is a thriller novel written by Dan Brown. It follows symbologist Robert Langdon as he unravels a series of clues and symbols in a quest to uncover a hidden secret that could shake the foundations of Christianity. Langdon is accompanied by cryptologist Sophie Neveu as they race against time and evade danger in their pursuit of the truth. The book combines elements of art, history, religion, and conspiracy to create a gripping and thought-provoking narrative.",
      price: "$120",
      genres: ["Thriller", "Mystery", "Conspiracy"],
      featured: false,
      bestSeller: false,
    },
    {
      id: 16,
      imageURL: The_Shining,
      title: "THE SHINING",
      author: "Stephen King",
      summary:
        "The Shining is a horror novel written by Stephen King. It tells the story of Jack Torrance, a struggling writer and recovering alcoholic who takes a job as the caretaker of the isolated Overlook Hotel during the winter season. As the hotel's supernatural forces begin to exert their influence on Jack and his family, they must confront their own demons and battle the dark secrets lurking within the hotel's walls. The Shining is a chilling exploration of madness, isolation, and the sinister power of the supernatural.",
      price: "$120",
      genres: ["Horror", "Thriller"],
      featured: false,
      bestSeller: false,
    },
  ],
  reducers: {
    // I am not adding any reducers here because I am not handling the admin part here
  },
});

export default bookSlice;
