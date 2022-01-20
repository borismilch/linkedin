import React from 'react'
import { observer } from 'mobx-react-lite'
import { UserStore, ResumeChangesStore } from '@/store/.'

import { useNavigation } from '@/hooks/.'
import { HiPencil } from 'react-icons/hi'
import { usePDF } from '@/hooks/.'


const HeadereaumeAddition = () => {
  const {donwloadPDF} = usePDF(ResumeChangesStore.fullForm)

  const {pushRouter} = useNavigation()

  const saveResume = async () => {
    ResumeChangesStore.trigger(false)

    await ResumeChangesStore.addResume()

    pushRouter('/' + UserStore.id)
  }

  return (
    <div className='bg-white p-3  border-t items-center border-gray-300 shadow-md shadow-[#999999c5] flex justify-between'>

    <div className='flex items-center justify-between app_container'>
        
      <div className='flex gap-2 items-center'>

        <button className='banner_button-blue_outline'>Resumes</button>

        <p>Resume-{UserStore.name}</p>

        <div className='small_icon'>
          <HiPencil className='text-xl text-blue-500' />
        </div>

        <p className='text-gray-500'>saved</p>


      </div>

      <div className='flex items-center gap-2 '>

        <button
          onClick={saveResume.bind(null, false)}
           className='banner_button-blue disabled:opacity-50' disabled={!ResumeChangesStore.controller}>Save Resume</button>

        <button 
          onClick={donwloadPDF.bind(null)}
          className='banner_button-blue_outline'
        >
          Download PDF</button>

      </div>
              
    </div>

      
    </div>
  )
}

export default observer(HeadereaumeAddition)
