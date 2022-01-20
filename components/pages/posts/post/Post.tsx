import React, {useEffect, useState, Suspense} from 'react'
import { IPost } from '@/models/.'

import { PostHeader } from '..'
import Image from 'next/image'
import { PostFormAction } from '..'
import { useToggle } from '@/hooks/index'

import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { FaRegCommentDots, FaCommentDots } from 'react-icons/fa'
import {TiArrowForwardOutline} from 'react-icons/ti'
import { IoIosSend } from 'react-icons/io'
import { UserStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { useMutation } from '@apollo/client'
import { SET_LIKED, VIEW_POST } from '@/gql/queries'
import { LikeIcon } from '@/components/icons'

import dynamic from 'next/dynamic'

import { CommentForm } from '@/components/pages/posts/comments'

const Post: React.FC<{post: IPost}> = ({post}) => {
   
  const [liked, changeLiked] = useToggle(false)
  const [totalLikes, setTotalLikes] = useState<number>(0) 
  const [canComment, changeCanComment] = useToggle(false)

  const ComentList = dynamic(() => import('../comments/CommentList'))

  const [setLikeToPost] = useMutation(SET_LIKED)
  const [viewPost] = useMutation(VIEW_POST, {variables:{ postId: post.id }})

  useEffect(() => {
    viewPost()
  }, [])

  const toggleLiked = () => {

    changeLiked(!liked)

    setTotalLikes(prev => ( prev + ( liked ? -1 : 1 ) ))

    const likedata = {
      userId: UserStore.id,
      postId: post.id
    }

    setLikeToPost({
      variables: { likeInput: likedata }
    })
  }

  useEffect(() => {
    changeLiked(post.likes?.map(like => like.userId).includes(UserStore.id))

    setTotalLikes(post.likes.length)
  }, [])

  return (
    <div className='flex flex-col bg-white overflow-hidden rounded-2xl drop-shadow-md'>

      <PostHeader post={post} />
     
      <div className='relative w-full min-h-[250px] h-screen'>
        <Image 
          src={post.image}
          layout='fill'
          objectFit='cover'
          alt='dksk'
        />
      </div>

     { totalLikes > 0 && <div className='flex border-b border-gray-300 items-center justify-between p-3 text-sm text-gray-600'>

        <div className='flex items-center gap-1'>
          <p>{totalLikes} likes</p>
          <LikeIcon />

        </div>

        <p>{0} comments</p>

      </div> }

     { canComment && <div className='flex flex-col'>

        <CommentForm id={post.id} />
  
       <Suspense fallback={ <p>Loading...</p> }>

          <ComentList postId={post.id} />

       </Suspense>

      </div> }

      <div className='flex items-center justify-between p-2'>

      <PostFormAction 
        Icon={ 
          liked ? 
            <AiFillLike className='text-xl text-blue-600' />  
            : 
            <AiOutlineLike className='text-xl' /> 
        } 
        title='Like'
        cb={toggleLiked}
      />

      <PostFormAction 
        Icon={ canComment ? 
           <FaCommentDots className='text-xl text-blue-600' /> :
           <FaRegCommentDots className='text-xl' /> 
        } 
        title='Comment'
        cb={changeCanComment.bind(null, !canComment)}
      />

  
      <PostFormAction 
        Icon={ <TiArrowForwardOutline className='text-xl' /> } 
        title='Send'
        cb={() => {}}
      />

     <PostFormAction 
        Icon={ <IoIosSend className='text-xl' /> } 
        title='Share'
        cb={() => {}}
      />

      </div>

    </div>
  )
}

export default observer(Post)
