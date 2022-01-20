import React from 'react'
import { IHeaderItem } from '@/models/.'

import { useNavigation } from '@/hooks/index'

const HeaderTab: React.FC<{headerItem: IHeaderItem}> = ({headerItem: { to, title, Icon }}) => {

  const {pushRouter, path} = useNavigation()

  return (
    <div
      onClick={pushRouter.bind(null, to)}
      className={'header_tab ' + (path === to && 'header_tab_active') }>

      <Icon className="text-[22px]" />

      <p className='text-sm'>{title}</p>
      
    </div>
  )
}

export default HeaderTab
