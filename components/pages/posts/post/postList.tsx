import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from '@/gql/queries'
import { Post } from '..'
import { IPost } from '@/models/.'

import { RiArrowDownSFill } from 'react-icons/ri'

const postList = () => {

  const { data, loading } = useQuery<{getAllPosts: IPost[]}>(GET_ALL_POSTS)

  if (loading) {
    return <p>Loaing...</p>
  }

  return (
    <div className='flex flex-col'>

      <div className='flex items-center gap-2 py-3'>

        <div className='h-[1.7px] bg-gray-300 mt-1 flex-grow' />

        <div className='text-gray-500 font-medium flex gap-1 items-center'>

          <p className='text-xs font-medium '>Sort by</p>

          <RiArrowDownSFill />
          
        </div>

      </div>

     <div className='flex flex-col gap-6'>

      {
       data?.getAllPosts.map((post: IPost) => (
        <Post key={post.id} post={post} />
       ))
      }

     </div>
      
    </div>
  )
}

export default postList
