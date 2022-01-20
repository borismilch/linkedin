import React from 'react'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { SidebarFeedItem } from '../'

import { feedItems } from '@/utils/mock/rsidebarItems'
import { IFeedItem } from '@/models/.'
import { BsArrowRightShort } from 'react-icons/bs'
 
const SidebarFeed = () => {
  return (
    <div className='flex p-3 rounded-lg overflow-hidden flex-col bg-white'>

      <div className='flex items-center justify-between pb-2'>  
        <h1 className='font-medium mb-2'>Add to your feed</h1>

        <BsFillInfoSquareFill className='text-gray-500 text-sm cursor-pointer' />

      </div>

      <div className='flex flex-col'>
        {
          feedItems.map((feedItem: IFeedItem, idx: number) => (
            <SidebarFeedItem key={idx} feedItem={feedItem} />
          ))
        }

      </div>

      <div className='flex p-3 justify-between text-gray-600'>

        <p className='text-sm'>View all recomendations</p>
        
        <BsArrowRightShort className='text-3xl animate-bounce' />
      </div>

  </div>
  )
}

export default SidebarFeed
