import { gql } from '@apollo/client'

export const UPDATE_RESUME = gql `
  mutation Mutation($resumeId: String, $resumeInput: ResumeInput) {
  updateResume(resumeId: $resumeId, resumeInput: $resumeInput) {
    id
  
  }
}
`

export const ADD_RESUME = gql `
  mutation Mutation($resumeInput: ResumeInput) {
  addResume(resumeInput: $resumeInput) {
    id
  }
}
`

export const GET_RESUME_BY_ID = gql `
  query Query($resumeId: String) {
  getResumeById(resumeId: $resumeId) {
    userId
    id
    name
    location
    email
    summary
    education
    licenses
    awards
  }
}
`

export const GET_USERS_RESUMES = gql `
  query Query($userId: String) {
  getUsersResumes(userId: $userId) {
    userId
    id
    name
    location
    email
  }
}
`

export const DELETE_RESUME = gql `
  mutation Mutation($resumeId: String) {
  deleteResume(resumeId: $resumeId) {
    id
  }
}
`