import React from 'react'
import { IFeedItem } from '@/models/.'
import Image from 'next/image'

import { BsPlus } from 'react-icons/bs'

const SidebarFeedItem: React.FC<{feedItem: IFeedItem}> = ({feedItem}) => {
  return (
    <div className='flex gap-2 mb-3'>

      <div className='avatar'>
        <Image 
          layout='fill'
          src={feedItem.image}
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col max-w-[200px]'>

        <h1 className='font-medium text-sm truncate'>{feedItem.name}</h1>

        <p className='text-gray-500 mb-1 font-light line-clamp-2 text-sm'>
          {feedItem.description}
        </p>

        <button className=" w-[100px] pr-2  active:scale-90 hover:text-gray-800 transition-all duration-200 cursor-pointer hover:bg-gray-100 font-medium flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-700">

          <BsPlus className='text-3xl' />

          <p>Follow</p>

        </button>

      </div>
      
    </div>
  )
}

export default SidebarFeedItem
