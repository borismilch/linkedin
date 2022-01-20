import UserResolver from "./resolvers/UserResolver"
import PostResolvers from './resolvers/PostResolvers'
import LikeResolver from './resolvers/LikeResolver'
import CommentResolver from './resolvers/CommentResolver'

import ResumeResolvers from './resolvers/ResumeResolver'

export const resolvers = {
  Query: {
    ...UserResolver.Query,
    ...PostResolvers.Query,
    ...CommentResolver.Query,
    ...ResumeResolvers.Query,
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...PostResolvers.Mutation,
    ...LikeResolver.Mutation,
    ...CommentResolver.Mutation,
    ...ResumeResolvers.Mutation
  },
  Post: {
    ...PostResolvers.Post
  },
  User: {
    ...UserResolver.User
  },
  Comment: {
    ...CommentResolver.Comment
  }
}