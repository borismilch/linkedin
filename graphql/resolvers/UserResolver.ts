import prisma from '@/lib/prisma'

export default {

  Query: {

    getAllUsers: async () => await prisma.user.findMany(),
    getUserById: async (_, { userId }) => await prisma.user.findUnique({
      where: { id: userId } 
    })

  },

  Mutation: {

    async checkUser (_, {userInput}) {
      let user = await prisma.user.findUnique({
        where: { email: userInput.email }
      })

      if (!user) {
        user = await prisma.user.create({
          data: userInput
        })
      }

      return user
    },

    updateUser: async (_, { userInput, userId }) => {

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: userInput
      })  

      console.log(userInput, updatedUser)

      return updatedUser

    },

    viewUser: async (_, userId) => {
      const user = await prisma.user.findUnique({
        where: { id: userId }
      })

      return await prisma.user.update({
        where: { id: userId },
        data: { views: user.views + 1 }
      })
    }
  
  },


  User: {
    followers: async ({id}) => (await prisma.follower.findMany({
      where: {followId: id}
    }) || []),

   
  }
}