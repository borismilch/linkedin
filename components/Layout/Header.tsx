import React from 'react';

import { ViewGridIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='flex justify-between  items-center w-full sticky top-0 p-3 shadow-sm border-b border-gray-300'>

      <div className='flex gap-2 items-center'>

        <p className='header_link'>About</p>

        <p className='header_link'>Store</p>

      </div>

      <div className='flex space-x-3 items-center '>
        <p className='header_link'>Gmail</p>

        <p className='header_link'>Images</p>

        <ViewGridIcon className='text-gray-700 h-10 transition-all duration-200 w-10 hover:bg-gray-100 p-2 rounded-full cursor-pointer' />

        <img 
          loading='lazy'
          src={'https://lh3.googleusercontent.com/ogw/ADea4I7L-FuwRimdWdhK_rVEME1LwqyGwoLJlSXQyQuUyw=s83-c-mo'}
          className='avatar transition-all duration-200 hover:scale-90 cursor-pointer' 
          alt="" 
        />

      </div>
      
    </header>
  );
};

export default Header;
