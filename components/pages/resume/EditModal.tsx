import React, { ChangeEvent, useEffect } from 'react'
import { ModalContainer } from '@/components/containers'

import { IResumeFormData } from '@/models/index'

import { ModalHeader } from '@/components/modal'
import { useInputValue } from '@/hooks/.'

const EditModel: React.FC<{onClose: () => void, name: string, form: IResumeFormData, onChange: (e: ChangeEvent<any>) => void}> = ({onClose, onChange, name, form}) => {

  const [val, bind, clean, changeVal] = useInputValue()

  const updateModalPiece = () => {
    onChange({ target: { name, value: val } } as ChangeEvent<HTMLInputElement>)
    onClose()
  }

  useEffect(() => {
    changeVal(form[name])
  }, [name, form])

  return (
    <ModalContainer>

      <ModalHeader onClose={onClose.bind(null)} title={ 'Edit ' + name  } />

      <div className='p-3 flex flex-col'>

        <p className='text-sm text-gray-600 my-2 font-medium'>{name[0].toUpperCase() + name.slice(1)}</p>

        <textarea 
          className='inputForm h-[270px] active:bg-gray-200  mt-0'
          name={name}
          {...bind}
        />

      </div>

      <div className='modalFooter'>

      <button
        onClick={onClose.bind(null)}
        className='banner_button-blue_outline'>
         Cancel Changes
       </button>

       <button 
         onClick={updateModalPiece.bind(null)}
         className='banner_button-blue'>
         Save Changes
       </button>

      </div>
      
    </ModalContainer>
  )
}

export default EditModel
