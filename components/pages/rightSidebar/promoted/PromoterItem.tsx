import React from 'react'
import Image from 'next/image'

import { IFeedItem } from '@/models/.'

import { MdOutlineArrowRight } from 'react-icons/md'

const PromoterItem: React.FC<{item: IFeedItem}>  = ({item}) => {

  return (
    <div className='flex items-center p-3 gap-2 '>

      <div className='avatar rounded-sm'>
        <Image 
          layout='fill'
          objectFit='cover'
          src={item.image}
        />
      </div>

      <div className='flex flex-col'>

        <p className='text-gray-600 font-medium truncate'>{item.name}</p>

        <p className='text-gray-600 text-[0.8rem] line-clamp-2'>{item.description}</p>

      </div>


      <MdOutlineArrowRight className='text-4xl' />

    </div>
  )
}

export default PromoterItem
