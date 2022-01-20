import React from 'react'
import { IHeaderItem } from '../../../models'
import { headerItems } from '../../../utils/mock/headerItems'
import { HeaderTab, HeaderUserAvatar } from '.'
import dynamic from 'next/dynamic'

import { useToggle } from '@/hooks/index'

const HeaderActions = () => {

  const HeaderUserDropdown = dynamic(() => import('./forms/HeaderUserDropdown'))

  const [open, changeOpen] = useToggle(false)

  return (
    <div className='flex items-center'>

      <div className='flex items-center'>

        {headerItems.map((headerItem: IHeaderItem) => (
          <HeaderTab key={headerItem.title} headerItem={headerItem} />
        ))}

        <div className='relative'>

          <div onClick={changeOpen.bind(null, !open)}>
            <HeaderUserAvatar />

          </div>
        
          <div 
            onClick={changeOpen.bind(null, false)}
            className={'transition-all duration-300 absolute -left-28 ' + (open ? 'opacity-100 visible' : 'opacity-0 invisible')}>
              <HeaderUserDropdown />
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default HeaderActions
