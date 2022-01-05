import React from 'react'
import { ITabItem } from '../../models/types'

const HeaderTabsTab: React.FC<{tab: ITabItem, selector: string}> = ({ tab, selector }) => {
  return (
    <div className={'tab_style ' + (selector === tab.val && 'text-blue-500 border-blue-500')}>

      <tab.Icon className='h-4 ' />

      <p className='hdden font-semibold sm:inline-flex '>{tab.title}</p>
      
    </div>
  )
}

export default HeaderTabsTab
