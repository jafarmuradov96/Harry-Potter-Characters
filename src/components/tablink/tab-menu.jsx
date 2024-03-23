
import Link from 'next/link';
import React from 'react';

const TabMenu = ({ activeFilter, handleClick }) => {
  const tabs = [
    { label: 'All', filter: null },
    { label: 'Gryffindor', filter: 'gryffindor' },
    { label: 'Slytherin', filter: 'slytherin' },
    { label: 'Hufflepuff', filter: 'hufflepuff' },
    { label: 'Ravenclaw', filter: 'ravenclaw' }
  ];

  return (
    <ul className='flex gap-4'>
      {tabs.map(tab => (
        <li
          key={tab.filter || 'all'}
          className={`bg-gray-200 rounded-lg py-[10px] px-[25px] cursor-pointer ${activeFilter === tab.filter ? 'active' : ''}`}
          onClick={() => handleClick(tab.filter)}
        >
          <Link href='/'>{tab.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TabMenu;
