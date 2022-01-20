import { makeAutoObservable, observable } from 'mobx'

import { apolloClient } from '@/lib/apollo'
import { IResume } from '@/models/index'
import { ADD_RESUME, GET_USERS_RESUMES } from '@/gql/queries'

class ResumeChanges {

  controller = false as boolean
  name = '' as string
  submitController = false as boolean

  resume: IResume = observable({} as IResume)

  constructor() {
    makeAutoObservable(this)
  }

  trigger (val: boolean)  {
    this.controller = val

  }

  setResume (resumeInput: IResume) {
    this.resume = {...this.resume, ...resumeInput}
  }

  async addResume () {
    try {
      const { data } = await apolloClient.
      mutate({ mutation: ADD_RESUME, variables: { resumeInput: {...this.resume, name: this.name} }, refetchQueries: [GET_USERS_RESUMES] })

      console.log(data)

    } catch (e) { console.log(e) }

  }

  get fullForm () {
    return { ...this.resume, name:this.name }
  }

  setName (val: string) {
    this.name = val
  } 
  
}

export default new ResumeChanges()