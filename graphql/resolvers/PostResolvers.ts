import prisma from '@/lib/prisma'

export default {

  Query: {

    getAllPosts: async () => await prisma.post.findMany()

  },

  Mutation: {

    addPost: async (_, {postInput}) => await prisma.post.create({
      data: postInput
    }),

    viewPost: async (_, { postId }) => {

      const post = await prisma.post.findUnique({
        where: { id: postId }
      })

      return await prisma.post.update({ where: { id: postId }, data: { views: post.views + 1 } })
    }

  },
  
  Post: {
    creator: async ({userId}) => await prisma.user.findUnique({where: { id: userId }}),
    
    likes: async ({id}) => await prisma.like.findMany({
      where: { postId: id }
    })
  }
}