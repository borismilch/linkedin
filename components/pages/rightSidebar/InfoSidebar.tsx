import React from 'react'
import { SidebarFeed, SidebarPromoted, SidebarFooter } from '.'


const InfoSidebar = () => {
  return (
    <div className=' hidden lg:flex max-w-[315px] gap-6 drop-shadow-md flex-col  w-full'>

     <SidebarFeed />

     <div className='flex flex-col sticky top-[90px]'>

       <SidebarPromoted/>

       <SidebarFooter />

     </div>

    </div>
  )
}

export default InfoSidebar
