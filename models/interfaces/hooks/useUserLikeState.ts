
export default interface IuseLikedState {
  liked: boolean
  totalLikes: number 
  toggleLikeState: () => void 
  setLikedState: (liked: boolean, totalLikes: number) => void
}

