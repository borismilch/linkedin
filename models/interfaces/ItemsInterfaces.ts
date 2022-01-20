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

export interface IMenuItem {
  cd: Function 
  text: string 

}

export interface IDropDownList {title: string, items: {title: string, to: string}[]}

