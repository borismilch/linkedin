import React, { SyntheticEvent, useEffect } from 'react'
import { UserStore, ChangeCommentStore } from '@/store/index'

import Image from 'next/image'
import { observer } from 'mobx-react-lite'

import { FaRegSmile } from 'react-icons/fa'
import { AppIcon } from '@/components/icons'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'

import { useMutation } from '@apollo/client'
import { ADD_COMMENT, GET_ALL_COMMENTS, CHANGE_COMMENT } from '@/gql/queries'
import { useInputValue } from '@/hooks/index'

const CommentForm: React.FC<{id: string}> = ({ id }) => {

  const [addComment] = useMutation(ADD_COMMENT)
  const [changeComment] = useMutation(CHANGE_COMMENT)

  const [body, bind, cleanComment, changeValue] = useInputValue('')

  const SubmitComment = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const commentInput = {
      userId: UserStore.id,
      body,
      postId: id,
      createdAt: Date.now().toString()

    }

    ChangeCommentStore.changedId ?
    changeComment({ variables: { commentInput, commentId: ChangeCommentStore.changedId }, refetchQueries: [GET_ALL_COMMENTS] })
    :
    addComment({ variables: { commentInput }, refetchQueries: [GET_ALL_COMMENTS]  })

    cleanComment()
    { ChangeCommentStore.changedId && ChangeCommentStore.clean() }
  }

  useEffect(() => {

    changeValue(ChangeCommentStore.changedText)

  }, [ChangeCommentStore.changedId])

  return (
    <div className='flex items-center border-b border-gray-300 p-3'>

    <div className='avatar'>

      <Image 
        src={UserStore.picture}
        layout='fill'
        alt='kkkkkkkk'
        objectFit='cover'
      />
    </div>

      <form 
        onSubmit={SubmitComment.bind(null)}
        className='wide_input p-0 border flex items-center mx-3 px-2' >

        <input
          type="text" 
          {...bind}
          placeholder='write a comment...' 
          className='border-0 text-sm rounded-full focus:border-0 focus:ring-0 flex-grow' 
        />

        <div className='flex items-center text-gray-500 hover:text-gray-700 transition-all cursor-pointer   '>

          <AppIcon Icon={FaRegSmile} />

          <AppIcon Icon={MdOutlinePhotoSizeSelectActual} />

        </div>

      </form>
      
    </div>
  )
}

export default observer(CommentForm)
