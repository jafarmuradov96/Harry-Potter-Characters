import Link from "next/link";
import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="flex">
      <img
        src={movie?.poster}
        alt="poster"
        className="w-full h-[450px] object-contain"
      />

      <div className="flex flex-col  mt-4 gap-1">
        <span className="text-gray-600">{movie?.serial} Series</span>
        <h3 className="text-2xl font-bold text-gray-900">{movie?.title}</h3>
        <p className="text-gray-600">{movie?.summary}</p>
        <div className="flex gap-5 items-center mt-3 font-medium">
          <span>{movie?.running_time}</span>
          <span>{movie?.release_date}</span>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <Link
            href={`${movie?.trailer}`}
            target="_blanc"
            className="w-[140px] h-[40px] rounded-xl bg-slate-900 text-white  flex items-center justify-center"
          >
            Trailer
          </Link>
          <Link
            href={`${movie?.wiki}`}
            target="_blanc"
            className="w-[140px] h-[40px] rounded-xl bg-slate-600 text-white  flex items-center justify-center"
          >
            Wikipedia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
