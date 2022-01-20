import React from 'react';
import { prompt } from '@/utils/mock/vars'

const ResumeItemContent: React.FC<{value: string, title: string}> = ({value, title}) => {
  return (
    <div className='flex flex-col'>

    <p className='text-xl font-medium'>{title}</p>

    <p className=' text-gray-600 text-xs pt-5 w-full line-clamp-2'>{ value? value : prompt }</p>

  </div>
  )
  
};

export default ResumeItemContent;
