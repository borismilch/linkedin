import React, { ReactElement } from 'react'

const PostFormAction: React.FC<{Icon: ReactElement<any, any>, title: string, cb: any}> = ({Icon, title, cb}) => {
  return (
    <div className='ico p-3 rounded-md w-full justify-center' onClick={cb.bind(null)}>

     {Icon}

      <p className='whitespace-nowrap'>{title}</p>

    </div>
  )
}

export default PostFormAction
