import React, { useEffect, useState } from 'react'

import { ResumeItem, ResumeItemContent, ResumeHeadingItem, } from '.'
import { observer } from 'mobx-react-lite'
import { useToggle, useFormValues } from '@/hooks/.'

import { resumeItems } from '@/utils/mock/resumeItems'

import { ResumeChangesStore, UserStore } from '@/store/.'

import dynamic from 'next/dynamic'

const ResumeForm: React.FC = () => {

  const [open, changeOpen] = useToggle(false)
  const [name, setName] = useState<string>('')

  const [ resume, changeForm ]  = useFormValues(['location', "summary", "education", "licenses", "awards" ])

  const EditModal = dynamic(() => import ('./EditModal'))

  const activate = (key: string) => {
    changeOpen(true)
    setName(key)
  }

  useEffect(() => {
    ResumeChangesStore.trigger(true)

    ResumeChangesStore.setResume({
      ...resume,  userId: UserStore.id,
      location: 'Ukraine',
      name: UserStore.name,
      email: UserStore.email,
      createdAt: Date.now().toString()
    })
  },[resume])

  return (
    <div className='element p-0 pt-5'>
     
      <ResumeItem >
        <ResumeHeadingItem />
      </ResumeItem>

      {
        resumeItems.map(item => (
          <ResumeItem 
            activate={activate}
            nameKey={item.key}
          >
            <ResumeItemContent 
              value={resume[item.key]}
              title={item.title}
            />
          </ResumeItem>
          
        ))
      }

      { open &&  <EditModal form={resume} name={name} onChange={changeForm} onClose={changeOpen.bind(null, false)} />}
      
    </div>
  )
}

export default observer(ResumeForm)
