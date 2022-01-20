import { gql } from "@apollo/client";

export const CHECK_USER = gql`
mutation Mutation($userInput: UserInput) {
  checkUser(userInput: $userInput) {
    email
    name
    picture
    id
    bio
    bgImage
  }
}`

export const GET_ALL_USERS = gql`
  query Query {
  getAllUsers {
    name
    picture
    id
    bgImage
  }
}
`

export const GET_USER_BY_ID = gql `
  query Query($userId: String) {
  getUserById(userId: $userId) {
    email
    name
    picture
    id
    bio
    bgImage
  }
}
`

export const UPDATE_USER = gql `
  mutation Mutation($userId: String, $userInput: UserInput) {
  updateUser(userId: $userId, userInput: $userInput) {
    id
  }
}
`

export const VIEW_USER = gql `
mutation Mutation($userId: String) {
  viewUser(userId: $userId) {
    id
  }
}
`