import { Logo } from '@/components/icons';
import UserStore from '@/store/UserStore';
import React from 'react';

import { useNavigation } from '@/hooks/.'

import { observer } from 'mobx-react-lite'

const ResumeHeadingItem = () => {

  const { pushRouter } = useNavigation()

  return (
    <div className='flex flex-col'>

    <p className='text-4xl'>{UserStore.name}</p>

    <p className='pb-2'>Ukraine</p>

    <div className='flex flex-col gap-2 w-full'>

      <p className='text-sm font-medium'>{UserStore.email}</p>

      <div className='flex items-center gap-1 ml-auto'>

        <div>
        <Logo w={15} h={15}  />
        </div>
      
        <p 
          onClick={pushRouter.bind(null, '/' + UserStore.id)}
          className='font-semibold text-sm text-blue-600 hover:underline cursor-pointer'>{'http://localhost:3000/' + UserStore.id}
        </p>

      </div>

    </div>

  </div>
  )
};

export default observer(ResumeHeadingItem);
