import { gql } from 'apollo-server-micro'

export const PostChema = gql`

 input PostInput {
    image: String 
    title: String 
    userId: String 
    createdAt: String
  }

  type Post {
    id: String 
    image: String 
    title: String 
    userId: String 
    createdAt: String

    likes: [Like]
    views: Int

    creator: User
  }

  type Query {
    getAllPosts: [Post]
  }

  type Mutation {

    addPost(postInput: PostInput): Post
    viewPost (postId: String): Post

  }
  
`