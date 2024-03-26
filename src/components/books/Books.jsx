"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksItem from "./books-item";
import Skeleton from "react-loading-skeleton";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/books"
        );
        setBooks(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getAllBooks();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Harry Potter book series</h1>
      <ul className="lg:mt-[100px] md:mt-[50px] sm:mt:-[50px]">
        {books &&
          books?.map((book) => (
            <li key={book?.serial}>
              {
                loading ? <Skeleton className="h-[300px]" /> :
                <BooksItem book={book} />

              }
            </li>
          ))}
      </ul>
    </>
  );
};

export default Books;
