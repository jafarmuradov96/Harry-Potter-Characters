import React from 'react'

const BooksItem = ({ book }) => {
  return (
    <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row  mb-20 sm:mb-32 md:mb-32 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] pt-10  px-10'>
        <div className='flex flex-col gap-2'>
            <span className="text-gray-600">{book?.serial} Part</span>
            <h2 className="text-2xl font-bold text-gray-900">{book?.title}</h2>
            <p className="text-gray-600">{book.summary}</p>
            <span>{book?.pages} pages</span>
            <span className='font-medium'>{book?.release_date}</span>
        </div>
        <img className='w-full h-[300px] object-contain mb-10 sm:mb-10 md:mb-20 ' src={book?.cover} alt="img" />
    </div>
  )
}

export default BooksItem