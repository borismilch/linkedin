import { gql } from 'apollo-server-micro'

export const CommentSchema = gql`

  input CommentInput {
    userId: String 
    postId: String 
    body: String 
    createdAt: String 
  }

  type Comment {
    id: String
    userId: String 
    postId: String 
    body: String 
    createdAt: String 
    creator: User

    likes: [Like]
  }

  type Query {
    getComments (postId: String): [Comment]
  }

  type Mutation {
    addComment(commentInput: CommentInput): Comment

    changeComment(commentInput: CommentInput, commentId: String): Comment
    deleteComment(commentId: String): Comment
    
  }
  
`