import React from 'react'
import {SmallLoader} from '@/components/icons'

const ImageLoader: React.FC<{centered?: boolean}> = ({centered = false}) => {
  return (
    <div className={'absolute flex z-10 inset-0 bg-black bg-opacity-50 p-2 py-1 ' + 
    (centered && 'items-center justify-center')}>

      <SmallLoader />
      
    </div>
  )
}

export default ImageLoader
