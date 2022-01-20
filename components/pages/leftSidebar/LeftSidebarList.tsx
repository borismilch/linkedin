import React from 'react'

const LeftSidebarList = () => {
  return (
    <div className='flex flex-col rounded-xl sticky top-[100px] drop-shadow bg-white '>

      <p className='link'>
        Groups
      </p>

      <p className='link'>
        Events
      </p>
      
      <p className='link'>
        Followed HashTags
      </p>


      <button className='p-2 border-t border-gray-300  text-gray-500 hover:text-gray-800'>Discover more</button>

    </div>
  )
}

export default LeftSidebarList
