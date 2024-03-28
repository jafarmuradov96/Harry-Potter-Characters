"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./movie-item";
import { useDispatch } from "react-redux";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  
  const dispatch = useDispatch()
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/movies"
        );

        setMovies(response.data);
        dispatch(setLoading(false))
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
      <ul className="mt-[50px] sm:mt:-[50px] md:mt-[50px] lg:mt-[100px]">
        {movies &&
          movies?.map((movie) => (
            <li key={movie?.serial} className=" mb-10">
              <MovieItem movie={movie} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesList;
