import UserResolver from "./resolvers/UserResolver"


export const resolvers = {
  Query: {
    ...UserResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation
  }
}