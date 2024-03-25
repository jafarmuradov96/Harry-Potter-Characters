import React from "react";
import CharacterItem from "./character-item";

const CharactersList = ({ allCharacters, characters, teamName }) => {
  return (
    <>
      {characters && characters.length <= 0 ? (
        <ul className="w-full flex gap-4 flex-wrap mt-10 ">
          {allCharacters?.map((character) => (
            character?.image !== '' &&
            <li className="w-[24%] bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
              <CharacterItem character={character}  />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="w-full flex gap-4 flex-wrap mt-10 ">
          {characters?.map((character) => (
            character?.image !== '' &&

            <li className="w-[24%] bg-zinc-300 p-[20px] rounded-md mb-4 " key={character.id}>
              <CharacterItem character={character}  />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharactersList;
