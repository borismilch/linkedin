import { IUser } from ".."
import { ILike } from ".."

export default  interface IComment {
  id: string 
  userId: string 
  postId: string 
  body: string 
  createdAt: string 

  creator: IUser
  likes: ILike[]

}