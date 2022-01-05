import React from 'react'

import { tabsData } from '../../utils/tabs'
import { ITabItem } from '../../models/types'

import HeaderTabsTab from './HeaderTabsTab'
import { useState } from 'react'

const HeaderTabs = () => {

  const [selected, setSelected] = useState<string>('all')

  const chageSelected = (val: string) => {
    setSelected(val)
  }

  return (
    <div className='w-screen items-center flex text-gray-700 justify-around text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>

      <div className='flex space-x-6'>

        {
          tabsData.map((tab: ITabItem) => (

            <div onClick={chageSelected.bind(null, tab.val)} key={tab.val}>

              <HeaderTabsTab selector={selected} tab={tab} />

            </div>
            
          ))
        }
        
      </div>

      <div className='flex items-start gap-3'>

        <p className='header_link pb-2'>Setings</p>
        <p className='header_link pb-2'>Tools</p>

      </div>

    </div>

  )
}

export default HeaderTabs
