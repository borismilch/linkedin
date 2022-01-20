import React from 'react'
import { useToggle } from '.'

const useModal = () => {

  const [open, changeOpen] = useToggle(false)

  const onClose = () => {
    changeOpen(false)
  }

  const onOpen = () => {
    changeOpen(true)
  }

  const bind = {
    onClose, 
    open
  }

  return {bind,open, changeOpen}
}

export default useModal
