import Image from 'next/image'
import React from 'react';
import logo from '../../asset/img/logo.png'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='container max-w-[1200px] mx-auto py-3 flex items-center justify-between'>
      <Link href='/'>
        <Image src={logo} width={150} height={100} alt='logo'/>
      </Link>

      <nav className='flex items-center gap-5'>
      <Link href = '/movies' className='text-2xl font-semibold text-gray-700 ' >Movies</Link>
      <Link href = '/books' className='text-2xl font-semibold text-gray-700 ' >Books</Link>

      </nav>
    </header>
  )
}

export default Header
