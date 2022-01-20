import prisma from '@/lib/prisma'

  
export default {

  Query: {

    getResumeById: async (_, { resumeId }) => await prisma.resume.findUnique({
      where: { id: resumeId }
    }),
    getUsersResumes: async (_, { userId }) => await prisma.resume.findMany({
      where: { userId: userId }
    })

  },

  Mutation: {

    addResume: async (_, { resumeInput }) => await prisma.resume.create({
      data: resumeInput,

    }),

    updateResume: async (_, { resumeInput, resumeId }) => await prisma.resume.update({
      data: resumeInput,
      where: { id: resumeId }
    }),

    deleteResume: async (_, { resumeId }) => await prisma.resume.delete({
      where: { id: resumeId }
    })

  },
  

}