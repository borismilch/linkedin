import prisma from '@/lib/prisma'

export default {

  Mutation: {
    setLike: async (_, {likeInput}) => {
      try {

        let like = await prisma.like.findFirst({
          where: {userId: likeInput.userId, postId: likeInput.postId}
        })
  
        if (!like) {
           like = await prisma.like.create({
             data: likeInput
           })
        } else {
          await prisma.like.delete({
            where: { id: like.id }
          })
        }
  
        return like

      } catch {}

    }
  },

}