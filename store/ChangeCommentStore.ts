import { makeAutoObservable } from 'mobx'

class ChangeCommentStore {

  changedId: string = ''
  changedText: string = ''
  
  constructor () {
    makeAutoObservable(this)
  }


  clean () {
    this.changedId = ''
    this.changedText = ''
  }

  setChangedComment (changedId: string, changedText: string) {
    this.changedId = changedId
    this.changedText = changedText
  }


}

export default new ChangeCommentStore()