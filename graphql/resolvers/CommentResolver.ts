import prisma from '@/lib/prisma'

export default {

  Query: {
    getComments: async (_, { postId }) => await prisma.comments.findMany({
      where: { postId }
    })
  },

  Mutation: {
    addComment: async (_, { commentInput }) => await prisma.comments.create({
      data: commentInput
    }),

    changeComment: async (_, { commentInput, commentId }) =>

      ( await  prisma.comments.update({
          data: commentInput,
          where: { id: commentId }
        })
      ),

    deleteComment: async (_, { commentId }) => await prisma.comments.delete({
      where: { id: commentId }
    })
  },

  Comment: {
    creator: async ({userId}) => await prisma.user.findUnique({
      where: { id: userId }
    }),
    likes: async ({ commentId }) => await prisma.like.findMany({
      where: { commentId  }
    })
  }

}