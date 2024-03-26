import Image from 'next/image'
import React from 'react';
import logo from '../../asset/img/logo.png'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-3 flex items-center justify-between'>
      <Link href='/'>
        <Image src={logo} alt='logo' className='w-[100px] sm:w-[150px] md:[150px]'/>
      </Link>

      <nav className='flex items-center gap-4'>
      <Link href = '/movies' className='sm:text-xl md:text-2xl  lg:text-2xl  font-semibold text-gray-700 ' >Movies</Link>
      <Link href = '/books' className='sm:text-xl md:text-2xl  lg:text-2xl  font-semibold text-gray-700 ' >Books</Link>

      </nav>
    </header>
  )
}

export default Header
