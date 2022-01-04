import { gql } from 'apollo-server-micro'

export const typeDefs = gql `

  type Link {
    id: String 
    title:  String 
    description: String 
    url: String 
    category: String 
    imageUrl: String 
    users: [String] 

  }

  type Query {
    links: [Link]
  }

  type Edge {
    cursor: String 
    node: Link
  }

  type  PageInfo {
    endCursor: String 
    hasNextPage: Boolean
  }

  type Response {
    pageInfo: PageInfo
    edges: [Edge]
  }

`