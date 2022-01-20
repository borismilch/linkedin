import React from 'react'
import { IComment } from '@/models/.'

import { useQuery } from '@apollo/client'
import { GET_ALL_COMMENTS } from '@/gql/queries'
import { Comment } from '.'

const CommentList: React.FC<{postId: string}> = ({postId}) => {

  const {data, loading} = useQuery<{getComments: IComment[]}>(GET_ALL_COMMENTS, {variables: { postId }})

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='p-3'>
      {
        data.getComments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      }
    </div>
  )
}

export default CommentList
