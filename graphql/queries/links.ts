import { gql } from "@apollo/client";

export const GET_ALL_LINKS = gql `
  query Links {
  links {
    id
    title
    url
    description
    category
    imageUrl
  }
}
`