'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CharactersList from '../Characters/characters-list';
import TabMenu from '../tablink/tab-menu';

const HomeView = () => {
    const [allCharacters, setAllCharacters] = useState([])
    const [teamName, setTeamName] = useState(null)
    const [characters, setCharacters] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);


    const handleClick = (name) => {
        setTeamName(name)
        setActiveFilter(name);
    }

    useEffect(() => {
        const getAllCharacter = async () => {
            try {
                const response = await axios.get('https://hp-api.onrender.com/api/characters');
                setAllCharacters(response.data)
            } catch(error) {
                console.error('Error fetching characters:', error)
            }
        }

        getAllCharacter()
    }, [])



    useEffect(() => {
        const getAllCharacter = async () => {
            try {
                const response = await axios.get(`https://hp-api.onrender.com/api/characters/house/${teamName}`);
                setCharacters(response.data)
            } catch(error) {
                console.error('Error fetching characters:', error)
            }
        }

        getAllCharacter()
    }, [teamName])



  return (
    <div className='container max-w-[1200px] mx-auto mt-20'>
        <TabMenu  handleClick = {handleClick} activeFilter = {activeFilter} />
        <CharactersList allCharacters = {allCharacters} characters = {characters} />
    </div>
  )
}

export default HomeView;