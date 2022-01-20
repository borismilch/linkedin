import React from 'react'
import Image from 'next/image'
import { FiChevronUp } from 'react-icons/fi'

import { useNavigation } from '@/hooks/index'
import { observer } from 'mobx-react-lite'
import UserStore from '@/store/UserStore'
 
const UserAvatar = () => {

  return (
    <div className='flex flex-col group transition-all duration-200 hover:bg-gray-100 hover:text-gray-800 items-center justify-center text-sm cursor-pointer w-[70px]'>

      <div
        
        className='avatar-xs'>

        {UserStore.picture && <Image
          layout='fill'
          alt='kkkk'
          src={UserStore.picture}
        />}

      </div>

      <p className='flex items-center '>
        <span className='text-gray-600'>
          {UserStore.name}
          </span> 

        <FiChevronUp className='mt-1 transition-all duration-300 group-hover:rotate-180' />
      </p>
              
    </div>
  )
}

export default observer(UserAvatar)
