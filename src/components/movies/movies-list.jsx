"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MovieItem from "./movie-item";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/movies"
        );

        setMovies(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getAllMovies();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Harry Potter movie series
      </h1>
      <ul className="lg:mt-[100px] md:mt-[50px] sm:mt:-[50px]">
        {movies &&
          movies?.map((movie) => (
            <li key={movie?.serial} className=" mb-10">
              <MovieItem movie={movie} loading = {loading} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesList;
