"use client";

import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import CharactersList from "../Characters/characters-list";
import TabMenu from "../tablink/tab-menu";

const HomeView = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [teamName, setTeamName] = useState("gryffindor");
  const [activeFilter, setActiveFilter] = useState(null);
  const [loading, setLoading] = useState(true)

  const handleClick = (name) => {
    setTeamName(name);
    setActiveFilter(name);
  };

  useEffect(() => {
    const getAllCharacter = async () => {
      try {
        // const response = await axios.get('https://hp-api.onrender.com/api/characters');
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/characters"
        );
        setAllCharacters(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    getAllCharacter();
  }, []);


  const gryffindor = [];
  const slytherin = [];
  const hufflepuff = [];
  const ravenclaw = [];

  allCharacters?.forEach((person) => {
    switch (person?.house) {
      case "Gryffindor":
        gryffindor.push(person);
        break;
      case "Slytherin":
        slytherin.push(person);
        break;
      case "Hufflepuff":
        hufflepuff.push(person);
        break;
      case "Ravenclaw":
        ravenclaw.push(person);
        break;
      default:
        break;
    }
  });

  let characters = [];

  const teams = {
    All: allCharacters,
    Gryffindor: gryffindor,
    Slytherin: slytherin,
    Hufflepuff: hufflepuff,
    Ravenclaw: ravenclaw,
  };

  characters = teams[teamName] || [];

  return (
    <>
      <TabMenu handleClick={handleClick} activeFilter={activeFilter}  />
      <CharactersList
        allCharacters={allCharacters}
        characters={characters}
        teamName={teamName}
        loading = {loading}
      />
    </>
  );
};

export default HomeView;
