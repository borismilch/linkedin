import { gql } from '@apollo/client'

export const ADD_POST = gql`
  mutation Mutation($postInput: PostInput) {
  addPost(postInput: $postInput) {
    id
  }
}
`

export const GET_ALL_POSTS = gql `
  query Query {
  getAllPosts {
    id
    image
    title
    userId
    createdAt
    views
    creator {
      picture
      name
      id
      followers {
        id
      }
    }
    likes {
      id
      userId
    }
  }
}
`


export const VIEW_POST = gql `
  mutation Mutation($postId: String) {
  viewPost(postId: $postId) {
    id
  }
}
`