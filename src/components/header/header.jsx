import Image from 'next/image'
import React from 'react';
import logo from '../../asset/img/logo.png'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='container max-w-[1200px] mx-auto py-3'>
      <Link href='/'>
        <Image src={logo} width={150} height={100} alt='logo'/>
      </Link>
    </header>
  )
}

export default Header