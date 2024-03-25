"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MovieItem from "./movie-item";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/movies"
        );

        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getAllMovies();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center">
        Harry Potter movie series
      </h1>
      <ul className="mt-[100px]">
        {movies &&
          movies?.map((movie) => (
            <li key={movie?.serial} className="max-w-[1200px] mx-auto mb-10">
              <MovieItem movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
