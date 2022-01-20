import React from 'react'
import { feedItems } from '@/utils/mock/rsidebarItems'

import {BiDotsHorizontalRounded} from 'react-icons/bi'
import { PromoteItem } from '..'

const SidebarPromoted = () => {
  return (
    <div className='flex flex-col bg-white'>

      <div className='flex items-center justify-between px-4 pt-2'>

        <h3 className='font-medium'>Promotions</h3>

        <div className='small_icon'>
          <BiDotsHorizontalRounded />
        </div>

      </div>

      <div className='flex flex-col'>

        {
          feedItems.map((item, idx) => (
            <PromoteItem key={idx} item={item} />
          ))
        }

      </div>
      
    </div>
  )
}

export default SidebarPromoted
