
export const resolvers = {
  Query: {
    links: async (_, __, {prisma}) => await prisma.link.findMany()
  }
}