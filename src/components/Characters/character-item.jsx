'use client';

import React from 'react'

const CharacterItem = ({ character }) => {

  const { name, image, house, actor } = character


  return (
    <>
       <img src={image} alt="character-img" className='w-full h-[300px] object-contain' />
       <h2 className='font-bold py-[5px] mt-3 text-gray-600'><span className='text-lg font-bold text-gray-800 mr-1'>Actor:</span> {actor}</h2>
       <h2 className='font-bold text-gray-600'><span className='text-lg font-bold text-gray-800 mr-1'>Character:</span> {name}</h2>
       <p className='font-bold py-[5px] text-gray-600'><span className='text-lg font-bold text-gray-800 mr-1'>Team:</span> {house}</p>
    </>
  )
}

export default CharacterItem;