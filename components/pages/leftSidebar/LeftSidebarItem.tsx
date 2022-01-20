import React, { ReactElement } from 'react'

const LeftSidebarItem: React.FC<{title: string | ReactElement<any, any>, subtitle?:string, Icon?: any}> = 
  ({title, subtitle, Icon}) => {

  return (
    <div className='flex p-3 bg-white items-center justify-between border-t border-gray-300 transition-all duration-200 hover:bg-gray-100 cursor-pointer text-sm'>

      <div className='flex flex-col'>

       { subtitle &&  <p className='text-gray-500 text-sm'>{subtitle}</p>}

       { title && <div className='font-medium text-sm'>{title}</div> }

      </div>

      {Icon}
 
    </div>
  )
}

export default LeftSidebarItem
