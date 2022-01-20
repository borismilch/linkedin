import { IUser } from ".."
import { IComment } from "..";
import { ILike } from "..";

export default interface IPost {
  creator: IUser,
  image: string 
  title: string 
  likes?: ILike[] 
  comments?: IComment[]

  createdAt: string

  id: string 
  userId: string

}