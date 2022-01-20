import { ChangeEvent, Ref } from "react";

export interface IUser {
  email: string 
  picture: string 
  name: string
  bio: string 
  bgImage: string
  id: string
  followers?: any[]

}

export interface IHeaderItem {
  Icon: Function 
  title: string 
  to: string
}

export interface IFeedItem {
  image: string,
  name: string,
  description: string
}

export interface IuseUploadDataReult {
  dataUrl: string,
  url: string,
  getUploadedData: (file: File) => void 
  loading: boolean 
  error: string
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  triggerInput: () => void
  fileInputRef: Ref<HTMLInputElement>
  cleanImage: () => void
  bind: {
    ref: Ref<HTMLInputElement>,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }
}

export type useInputValueArr = [string, {value: string, onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)}, () => void, (val: string) => void]

export interface IDropDownList {title: string, items: {title: string, to: string}[]}

export interface ILike {
  id: string 
  userId: string 
  postId?: string 
  commentId?: string
}

export interface IComment {
  id: string 
  userId: string 
  postId: string 
  body: string 
  createdAt: string 

  creator: IUser
  likes: ILike[]

}

export interface IPost {
  creator: IUser,
  image: string 
  title: string 
  likes?: ILike[] 
  comments?: IComment[]

  createdAt: string

  id: string 
  userId: string

}

export interface IuseLikedState {
  liked: boolean
  totalLikes: number 
  toggleLikeState: () => void 
  setLikedState: (liked: boolean, totalLikes: number) => void
}

export interface IMenuItem {
  cd: Function 
  text: string 

}

export interface IResumeFormData {
  location: string 
  summary: string 
  education: string
  licenses: string
  awards: string
  createdAt: string
 
}

export interface IResume extends IResumeFormData {
  id?: string 
  email: string 
  userId: string
  name: string 
}