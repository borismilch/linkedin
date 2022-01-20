import React from 'react'
import { observer } from 'mobx-react-lite'

import Image from 'next/image'
import { DropItems } from '@/utils/mock/DropItems'

import { UserStore } from "@/store/."

import { useNavigation } from '@/hooks/.'

import DropDownList from './DropDownList'

const HeaderUserDropdown = () => {

  const {pushRouter} = useNavigation()

  return (
    <div className='flex flex-col w-[250px] border-gray-300 border drop-shadow-lg bg-white rounded-xl '>

      <div className='flex gap-3 p-2 items-center'>

        <div className='avatar'>

        { UserStore.picture &&
            <Image  
              alt='kllmmm'
              layout='fill'
              src={UserStore.picture}
            />
          }

        </div>

          <div className='flex flex-col gap-2'>

            <p className='text-lg truncate font-medium hover:underline cursor-pointer'>{UserStore.name}</p>

            <p className='text-sm font-medium line-clamp-3' >{UserStore.bio}</p>

          </div>
       
      </div>
      
      <button 
        onClick={pushRouter.bind(null, '/' + UserStore.id)}
        className=' outline_button'
      >View Profile</button>
      {
        DropItems.map(list => (
          <DropDownList key={list.title} list={list} />
        ))
      }
      
    </div>
  )
}

export default observer(HeaderUserDropdown)
