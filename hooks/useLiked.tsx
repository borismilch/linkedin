import React from 'react'
import { useToggle } from '.'
import { useState } from 'react'

import { IuseLikedState } from '@/models/.'

const useLiked = (): IuseLikedState => {

  const [liked, changeLiked] = useToggle(false)
  const [totalLikes, setTotalLikes] = useState<number>(0)

  const toggleLikeState = () => {
    changeLiked(!liked)

    setTotalLikes(prev => ( prev + ( liked ? -1 : 1 ) ))
  }

  const setLikedState = (liked: boolean, totalLikes: number) => {
    changeLiked(liked)
    setTotalLikes(totalLikes)
  }

  return {liked, totalLikes, toggleLikeState, setLikedState}
}

export default useLiked
