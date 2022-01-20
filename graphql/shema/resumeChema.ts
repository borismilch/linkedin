import { gql } from 'apollo-server-micro'

export const resumeShema = gql`

  type Resume {
    id:  String
    name: String 
    location: String 
    email: String 
    summary: String 
    education: String
    licenses: String
    awards: String
    userId: String
    createdAt: String
  }

  input ResumeInput {
    name: String 
    location: String 
    email: String 
    summary: String 
    education: String
    licenses: String
    awards: String
    userId: String
    createdAt: String
  }

  type Query {
    getUsersResumes (userId: String): [Resume]
    getResumeById (resumeId: String): Resume
  }

  type Mutation {

    addResume(resumeInput: ResumeInput): Resume
    updateResume(resumeInput: ResumeInput, resumeId: String): Resume
    deleteResume (resumeId: String): Resume
  }
`