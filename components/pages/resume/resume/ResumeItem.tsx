import React from 'react'
import { BiPencil } from 'react-icons/bi'
import { HiPlus } from 'react-icons/hi'

const ResumeItemContainer: React.FC<{activate?: (key: string) => void, nameKey?: string}> = ({children, activate, nameKey}) => {

  return (
    <div className='flex items-start justify-between pl-11 pr-6 py-6 w-full border-b border-gray-300'>

      <>
      {children} 
      </>
     
      <div className='flex flex-col '>

        <div className='small_icon_blue'>

          {activate && <BiPencil 
            onClick={activate.bind(null, nameKey)}
            className='text-2xl'
          />}

        </div>

        <div className='small_icon_blue'>

          <HiPlus className='text-2xl' />

        </div>

      </div>

    </div>
  )
}

export default ResumeItemContainer
