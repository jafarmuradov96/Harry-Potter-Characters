import Image from 'next/image'
import React from 'react'

const BooksItem = ({ book }) => {
  return (
    <div className='flex mb-20'>
        <div className='flex flex-col gap-2'>
            <span className="text-gray-600">{book?.serial} Part</span>
            <h2 className="text-2xl font-bold text-gray-900">{book?.title}</h2>
            <p className="text-gray-600">{book.summary}</p>
            <span>{book?.pages} pages</span>
            <span className='font-medium'>{book?.release_date}</span>
        </div>
        <img className='w-full h-[350px] object-contain' src={book?.cover} alt="" />
    </div>
  )
}

export default BooksItem