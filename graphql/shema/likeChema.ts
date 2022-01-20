import { gql } from 'apollo-server-micro'

export const LikeChema = gql`

  type Like {
    id: String
    userId: String 
    postId: String
    commentId: String
  }

  input LikeInput {
    userId: String 
    postId: String
    commentId: String
  }

  type Mutation {

    setLike(likeInput: LikeInput): Like

  }
  
`