import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const ModalHeader: React.FC<{onClose: () => void, title?: string, subtitle?: string}> = ({onClose, title, subtitle}) => {
  return (
    <div className='flex justify-between absolute top-0 w-full items-center px-6 p-4 border-gray-300 border-b drop-shadow'>

    <div className='flex flex-col ga-1'>

     { title && <p className='text-xl font-light'>{title}</p>}

     { subtitle && <p className='text-sm font-sans'>{subtitle}</p>}

    </div>

    <div
      onClick={onClose.bind(null)}
      className='small_icon active:scale-90'> 
      <IoCloseSharp className='text-3xl' />
    </div>

  </div>
  )
}

export default ModalHeader
