import React from 'react'

import { IDropDownList } from '@/models/.'

import { useNavigation } from '@/hooks/index'

const DropDownList: React.FC<{list: IDropDownList}> = ({list}) => {

  const {pushRouter} = useNavigation()

  return (
    <div className='py-3 border-t border-gray-300 flex flex-col'>

      <h4 className='font-semibold ml-1 px-2'>{list.title}</h4>

      <div className='flex flex-col'>
        {list.items.map(item =>(
          <div className='p-1 px-3 transition-all duration-200 hover:bg-gray-100 cursor-pointer text-gray-600 text-sm' onClick={pushRouter.bind(null, item.to)} key={item.title}>
            {item.title}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default DropDownList
