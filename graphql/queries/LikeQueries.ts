import { gql } from '@apollo/client'

export const SET_LIKED = gql `
  mutation Mutation($likeInput: LikeInput) {
  setLike(likeInput: $likeInput) {
    id
    userId
  }
}
`