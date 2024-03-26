import Image from 'next/image'
import React from 'react'

const BooksItem = ({ book }) => {
  return (
    <div className='flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse mb-20 md:mb-32 sm:mb-32'>
        <div className='flex flex-col gap-2'>
            <span className="text-gray-600">{book?.serial} Part</span>
            <h2 className="text-2xl font-bold text-gray-900">{book?.title}</h2>
            <p className="text-gray-600">{book.summary}</p>
            <span>{book?.pages} pages</span>
            <span className='font-medium'>{book?.release_date}</span>
        </div>
        <img className='w-full h-[350px] object-contain md:mb-20 sm:mb-10' src={book?.cover} alt="" />
    </div>
  )
}

export default BooksItem