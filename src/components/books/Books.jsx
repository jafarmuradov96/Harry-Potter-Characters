"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksItem from "./books-item";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/books"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getAllBooks();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center">Harry Potter book series</h1>
      <ul className="mt-[150px]">
        {books &&
          books?.map((book) => (
            <li key={book?.serial}>
              <BooksItem book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
