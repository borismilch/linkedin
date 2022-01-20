import { IMenuItem } from '@/models/.'
import React from 'react'

const ContainertMenu: React.FC<{menuItems: IMenuItem[], close: () => void}> = ({menuItems, close }) => {
  return (
    <div 
      onClick={close.bind(null)}
      className='bg-white overflow-hidden w-[145px] transition-all duration-200 rounded-xl drop-shadow-lg '>

    {
      menuItems.map(item => (
        <div 
          onClick={item.cd.bind(null)}
          className='
          text-gray-700 text-sm font-medium transition-all duration-200 cursor-pointer hover:bg-gray-100 p-2 px-3'
        >
            {item.text}
        </div>
      ))

    }
    </div>
  )
}

export default ContainertMenu
