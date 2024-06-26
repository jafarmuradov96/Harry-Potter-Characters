import React from "react";
import CharacterItem from "./character-item";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from "react-redux";


const CharactersList = ({ allCharacters, characters  }) => {

  const loading = useSelector((state) => state.dataReducer.data)

  return (
    <>
      {characters && characters.length <= 0 ? (
        <ul className="w-full flex gap-4 flex-wrap mt-10 ">
          {allCharacters?.map((character) => (
            character?.image !== '' &&
            <li className="w-[100%] sm:w-[98%] md:w-[48%] lg:w-[32%] xl:w-[24%]    bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
              {
                loading ? <Skeleton  className="h-[300px]"/> :
                
                <CharacterItem character={character}  />
              }
            </li>
          ))}
        </ul>
      ) : (
        <ul className="w-full flex gap-4 flex-wrap mt-10 ">
          {characters?.map((character) => (
            character?.image !== '' &&

            <li className="w-[100%] sm:w-[98%] md:w-[48%] lg:w-[32%] xl:w-[24%]    bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
              {
                loading ? <Skeleton  className="h-[300px]"/> :
                
                <CharacterItem character={character}  />
              }
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharactersList;
