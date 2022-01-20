import React from 'react'

import { SidebarUserShowCase, LeftSidebatItem, LeftSidebarList } from '.'
import { WhatIcon } from '@/components/icons'
import { useNavigation } from '@/hooks/index'

import { BsBookmarkFill } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'

const UserSidebar = () => {

  const {pushRouter} = useNavigation()

  return (
    <div className='flex flex-col w-full md:max-w-[225px]'>

    <div className='flex flex-col w-full rounded-lg overflow-hidden drop-shadow-sm'>

      <SidebarUserShowCase />

      <LeftSidebatItem 
        subtitle={'Connections'}
        title='Grow your network'
        Icon={ 
          <div className='small_icon' onClick={pushRouter.bind(null, '/net')}>
            <FaUserPlus className='text-xl' />
          </div>
        }
      />

      <LeftSidebatItem 
        subtitle={'Acess exclusive tools '}
        title={
          <div className='flex items-center gap-1'>
            <WhatIcon  />

            <p>Try premium for free</p>

          </div>
        }
        
      />

      <LeftSidebatItem 
        title={
          <div className='flex items-center gap-1'>
            <BsBookmarkFill className='text-gray-600 hover:text-gray-800 transition-all duration-200' />

            <p>My items</p>

          </div>
        }
        
      />
    </div>

    </div>
  )
}

export default UserSidebar
