import React from 'react'
import { RiBuilding2Fill } from 'react-icons/ri'

import { IUser } from '@/models/.'

const BannerProfileActions: React.FC<{user: IUser}> = ({user}) => {
  return (
    <div className='flex flex-col px-6 p-3'>

    <div className='flex items-start  '>

      <div className='flex flex-col'>

        <p className='text-2xl font-medium text-black  '>{user.name}</p>

       <p className='text-lg font-medium leading-3'>{user.bio}</p>

       <div className='flex items-center mt-3'>

         <p className='text-sm text-gray-500'>Ukraine </p>

        <p className='font-semibold text-xs mx-1 text-gray-500'>
         ·
        </p>

        <p className='text-blue hover:underline text-sm transition-all duration-200 text-blue-500'>View Resume</p>

       </div>

      </div>

      <div className='flex items-center gap-3 mt-2 flex-grow justify-end mr-4'>

       <p className='text-black font-medium'>Python chokers</p> 

       <RiBuilding2Fill className='text-xl' />
        
      </div>
      
    </div>

  </div>
  )
}

export default BannerProfileActions
