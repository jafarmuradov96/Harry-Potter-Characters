
import Link from 'next/link';
import React from 'react';

const TabMenu = ({ activeFilter, handleClick }) => {
  const tabs = [
    { label: 'All', filter: null },
    { label: 'Gryffindor', filter: 'Gryffindor' },
    { label: 'Slytherin', filter: 'Slytherin' },
    { label: 'Hufflepuff', filter: 'Hufflepuff' },
    { label: 'Ravenclaw', filter: 'Ravenclaw' }
  ];

  return (
    <ul className='lg:flex lg:flex-row md:flex-row gap-4 sm:flex-col'>
      {tabs.map(tab => (
        <li
          key={tab.filter || 'all'}
          className={`bg-gray-200 rounded-lg py-[10px] px-[25px] sm:mb-[10px] cursor-pointer ${activeFilter === tab.filter ? 'active' : ''}`}
          onClick={() => handleClick(tab.filter)}
        >
          <Link href='/'>{tab.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TabMenu;
