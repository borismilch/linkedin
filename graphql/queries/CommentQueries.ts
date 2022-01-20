import { gql  } from '@apollo/client'

export const DELETE_COMMENT = gql  `
  mutation AddComment($commentId: String) {
    deleteComment(commentId: $commentId) {
      id
    }
}
`

export const ADD_COMMENT = gql  `
  mutation AddComment($commentInput: CommentInput) {
  addComment(commentInput: $commentInput) {
    id
  }
}
`

export const CHANGE_COMMENT = gql `
  mutation AddComment($commentInput: CommentInput, $commentId: String) {
    changeComment(commentInput: $commentInput, commentId: $commentId) {
      id
    }
  }
`

export const GET_ALL_COMMENTS = gql `
  query Query($postId: String) {
  getComments(postId: $postId) {
    id
    body
    createdAt
    userId
    creator {
      picture 
      name 
      id
    }
  }
}
`