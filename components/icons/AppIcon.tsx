import React from 'react'

interface AppIconProps {Icon: Function, className?: string, iconClassName?: string}

const AppIcon: React.FC<AppIconProps> = ({Icon, className = '', iconClassName = '' }) => {
  return (
    <div className={'small_icon ' + className}>

      <Icon className={iconClassName} />
      
    </div>
  )
}

export default AppIcon
