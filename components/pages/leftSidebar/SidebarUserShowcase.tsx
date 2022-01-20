
import React from 'react'
import Image from 'next/image'

import UserStore from '@/store/UserStore'
import { observer } from 'mobx-react-lite'

const SidebarUserShowcase:React.FC = () => {
  return (
    <div className='flex flex-col w-full pb-5 bg-white relative'>

      <div className='w-full h-[56px] absolute top-0'>
        <Image 
          alt='kkkkgug'
          src={UserStore.bgImage}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex mt-5 flex-col justify-center items-center text-center'>

        <div className='avatar-lg mb-4'>

          <Image 
            src={UserStore.picture}
            layout='fill'
            alt='kkklnn'
            objectFit='cover'
          />

        </div>

        <p className='font-medium text-lg'>{UserStore.name}</p>

        <p className='text-sm font-medium '>{UserStore.bio}</p>

        <hr />

      </div>
      
    </div>
  )
}

export default observer(SidebarUserShowcase)
