import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'

const Footer = () => {

  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 text-gray-700 text-m p-3 bg-gray-100'>

      <div className='px-8 py-1'>

        <p className='font-semibold'>United Kingdom</p>

      </div>

      <div className='grid grid-cols-1 gap-1 '>

        <div className='flex items-center justify-center gap-2'>
          <GlobeIcon className='h-5 w-5 mr-1 text-gray-700' />
          <p className='font-semibold'>Carbon neutal sicne 2007</p>
        </div>

        <div className='flex justify-center space-x-8 whitespace-nowrap'>
          <p>Advertising</p>
          <p>Buisness</p>
          <p>How to Search </p>
        </div>

        <div className='flex justify-center space-x-8 whitespace-nowrap'>
          <p>privacy</p>
          <p>Terns</p>
          <p>Settings</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
