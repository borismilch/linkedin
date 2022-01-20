import { IUser } from '@/models/.'
import  { makeAutoObservable }  from 'mobx'

class UserStore {

  name = '' as string 
  email = '' as string 
  picture = '' as string 
  bio = '' as string 
  bgImage = '' as string
  id = '' as string
 

  isAuthetheficated = false as boolean 

  constructor () {
    makeAutoObservable(this)
  }

  setUser({ name, email, picture, bio, bgImage, id }: IUser) {
    this.name =  name 
    this.email = email 
    this.picture = picture 
    this.bio = bio ||'...'
    this.isAuthetheficated = true
    this.bgImage = bgImage
    this.id = id
  }

  cleanUser () {
    this.name = ''
    this.email = ''
    this.picture = ''
    this.bio = ''
    this.bgImage = ''
    this.id = ''
    this.isAuthetheficated = false
  }
}

export default new UserStore()