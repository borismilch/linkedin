import React from 'react'
import { IPost } from '@/models/.'
import Image from 'next/image'

import { dayts } from '@/lib/dayjs'

import { BiDotsHorizontalRounded } from 'react-icons/bi'

const PostHeader: React.FC<{post: IPost}> = ({post}) => {
  return (
    <div className='p-3'>
      <div className='flex gap-2 items-center '>

        <div className='small_icon absolute top-2 right-2'>
          <BiDotsHorizontalRounded className='text-2xl' />
        </div>

      <div className='avatar h-[42px] w-[42px]'>
        <Image 
          alt='kkkkkmm'
          layout='fill'
          src={post.creator.picture}
          objectFit='cover'
        />
      </div>

      <div  className='flex flex-col'>
        
        <div className='flex items-center gap-2'>

          <p className='text-sm font-medium'>{post.creator.name}</p>

          <p className='text-xs text-gray-500 font-medium'>{dayts(+post.createdAt).fromNow()}</p>

        </div>

        <p className='text-sm text-gray-500'>
          {post.creator.followers.length} followers
        </p>

      </div>
      
    </div>

    <p className='pt-2'>{post.title}</p>

  </div>
  )
}

export default PostHeader
