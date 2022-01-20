import React from 'react'
import { LongLogo } from '@/components/icons'

const items = `About Accessibility Help Center Privacy Terms Ad Choices Advertising Business Services More  Accessibility Help Cente`.split(' ')

const SidebarFooter = () => {
  return (
    <>
    <div className='mx-auto  w-[200px] text-center justify-center flex gap-2 flex-wrap py-4'>
      {items.map((item, idx) => (
        <p className='text-gray-500 text-xs hover:text-blue-600 hover:underline cursor-pointer' key={idx}>
            {item}
        </p>
      ))}

      <div className='flex items-center gap-2'>
        <LongLogo />

        <p className='text-sm font-medium whitespace-nowrap'>LinkedIn Corporation © 2022</p>
      </div>
      
    </div>

    </>
  )
}

export default SidebarFooter
