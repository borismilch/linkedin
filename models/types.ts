export interface IUser {
  email: string 
  image: string 
  name: string 
  createdAt: Date 
  lastVisit?: Date 
}

export interface ITabItem {
  val: string 
  Icon: any 
  title: string
}