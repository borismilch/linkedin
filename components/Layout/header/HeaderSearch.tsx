import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Logo from '../../icons/Logo'

const HeaderSearch = () => {
  return (
    <div className='flex items-center gap-3 py-2'>

    <Logo />

    <div className='flex items-center gap-2 px-4 bg-[#eef3f4] rounded-md'>

      <BiSearchAlt2 />

      <input type="text" placeholder='Search...' className='border-0 bg-transparent text-sm text-gray-600 focus:border-0 focus:ring-0' />

    </div>
  </div>
  )
}

export default HeaderSearch
