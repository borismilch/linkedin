import React, { ChangeEvent } from 'react'

import { ResumeChangesStore } from '@/store/.'
import { observer } from 'mobx-react-lite'

const ResumeSidebarHead = () => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    ResumeChangesStore.setName(e.target.value)
  }

  return (
    <div className='flex flex-col element p-4'>

      <p className='text-xl pb-2 '>Resume insights</p>

      <p>Keyword check</p>

      <p className='text-gray-500 pb-2 text-sm'>Add your desired job title to get suggested keywords based on your past roles</p>

      <p className='text-gray-500 text-sm'>Job title</p>

      <input
        type="text" 
        placeholder='Enter profession...' 
        className='inputForm px-4' 
        onChange={onChange}
      />


      <button className='banner_button-blue_outline'>Get suggestions</button>
    </div>
  )
}

export default observer(ResumeSidebarHead)
