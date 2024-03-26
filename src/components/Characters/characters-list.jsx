import React from "react";
import CharacterItem from "./character-item";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const CharactersList = ({ allCharacters, characters, loading  }) => {
  return (
    <>
      {characters && characters.length <= 0 ? (
        <ul className="w-full flex gap-4 flex-wrap mt-10 ">
          {allCharacters?.map((character) => (
            character?.image !== '' &&
            <li className="xl:w-[24%] lg:w-[32%] md:w-[48%] sm:w-[98%] bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
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

            <li className="xl:w-[24%] lg:w-[32%] md:w-[48%] sm:w-[98%] bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
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
