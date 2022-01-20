import React, { useEffect } from 'react'
import { IComment, IMenuItem } from '@/models/.'
import Image from 'next/image'

import { dayts } from '@/lib/dayjs'
import { UserStore, ChangeCommentStore } from '@/store/index'
import { MenuContainer } from '@/components/containers'  

import { DELETE_COMMENT, GET_ALL_COMMENTS } from '@/gql/queries'
import { useMutation } from '@apollo/client'

import { observer } from 'mobx-react-lite'

import { BsThreeDots } from 'react-icons/bs'

import { useToggle } from '@/hooks/index'

const Comment: React.FC<{comment: IComment}> = ({comment}) => {

  const [open, changeOpen] = useToggle(false)
  const [isChanging, changeIsChanging] = useToggle(false)
  const [isDeleting, setIsDeleting] = useToggle(false)

  const [deleteCommentFromList] = useMutation(DELETE_COMMENT)

  useEffect(() => {

    changeIsChanging(ChangeCommentStore.changedId === comment.id)

  }, [ChangeCommentStore.changedId])

  const chnageComment = () => {

    ChangeCommentStore.setChangedComment(comment.id, comment.body)

  }

  const deleteComment = () => {

    setIsDeleting(true)

    deleteCommentFromList({ variables: { commentId: comment.id }, refetchQueries: [GET_ALL_COMMENTS] })

  }

  const containerItems: IMenuItem[] = [
    {
      text: 'Delete Comment',
      cd: deleteComment
    },
    {
      text: 'Change Comment',
      cd: chnageComment
    }
  ]

  
  return (
   <div className={'flex gap-2 py-4 ' + ((isChanging || isDeleting) && 'opacity-50')}>

      <div className='avatar flex-shrink-0'>
        <Image 
          alt='hhh'
          layout='fill'
          src={comment.creator.picture}
          objectFit='cover'
          
        />
      </div>

      <div className='flex w-full relative flex-col'>

        <div className='flex flex-col flex-grow p-3 rounded-lg drop-shadow bg-gray-200 '>

        <div className='absolute right-2 top-2 flex items-center gap-2'>

          <div className='flex flex-col relative '>

           { comment.creator.id === UserStore.id && <>

            { open &&  <div className='absolute -left-20 top-4'>

              <MenuContainer close={() => changeOpen(false)} menuItems={containerItems} />

            </div>}

            <BsThreeDots 

              onClick={changeOpen.bind(null, !open)}
              className='ml-auto cursor-pointer'
            />

            </>}

          <p className='font-medium text-xs text-gray-700'>
            {dayts(+comment.createdAt).fromNow()}
          </p>

          </div>

        </div>

        <div className='flex flex-col'>

          <h4 className='font-medium text-gray-500'>{comment.creator.name}</h4>

          <p className='font-medium text-sm'>{comment.body}</p>

        </div>


        </div>
      </div>
    </div>
  )
}

export default observer(Comment)
