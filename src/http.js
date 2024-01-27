import axios from "axios";
import { getAuthToken, getUser } from "./util/auth";
import { QueryClient } from "@tanstack/react-query";
const token = getAuthToken();
const user = getUser();

export const queryClient = new QueryClient();

export const fetchBooks = async () => {
  try {
    const response = await axios.get(
      "https://bookstore-api12.onrender.com/api/book/getbooks"
    );

    return response.data.data.books;
  } catch (error) {
    throw error;
  }
};

export const fetchSpecificBook = async (bookID) => {
  try {
    const response = await axios.get(
      `https://bookstore-api12.onrender.com/api/book/getbook/${bookID}`
    );

    return response.data.data.book;
  } catch (error) {
    throw error;
  }
};

export const postOrder = async (orderDetails) => {
  try {
    await axios.post(
      `https://bookstore-api12.onrender.com/api/cart/addBooks/${user}`,
      orderDetails,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const cartOrder = async () => {
  try {
    const response = await axios.get(
      `https://bookstore-api12.onrender.com/api/cart/getBooks/${user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data.data.items;
  } catch (error) {
    throw error;
  }
};

export const updateData = async (mode, id) => {
  try {
    await axios.put(
      `https://bookstore-api12.onrender.com/api/cart/update/${id}`,
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
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(
      `https://bookstore-api12.onrender.com/api/cart/delete/${id}/${user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
