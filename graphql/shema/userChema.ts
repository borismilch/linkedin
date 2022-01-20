import { gql } from 'apollo-server-micro'

export const userChema = gql `

  type Query {
    getAllUsers: [User]
    getUserById (userId: String): User  
  }

  type Follower {
    id: String 
    userId: String 
    followId: String
  }

  type Mutation {
    checkUser (userInput: UserInput): User
    updateUser (userInput: UserInput, userId: String): User
    viewUser (userId: String): User
  }

  input UserInput {
    email: String
    name: String 
    picture: String 
    bio: String
    bgImage: String
  }

  input ResumeInput {
    userId: String
  }


  type Resume {
    userId: String
    id: String 
  }

  type User {
    email: String
    name: String 
    picture: String 
    id: String
    bio: String
    bgImage: String
    views: Int

    contacts: [String] 

    followers: [Follower]

  }

`