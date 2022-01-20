import React from 'react'
import { ModalContainer } from '@/components/containers'
import { ModalHeader } from '@/components/modal'

import { CreateResumeFooter } from '../pages/profile'
import { useQuery } from '@apollo/client'

import { GET_USERS_RESUMES } from '@/gql/queries'
import { observer } from 'mobx-react-lite'
import { UserStore } from '@/store/.'

import { ResumeModalItem } from '.'
import { IResume } from '@/models/.'

const CreateResumeModal: React.FC<{open: boolean, onClose: () => void}> = ({open, onClose}) => {

  const { data } = useQuery(GET_USERS_RESUMES, { variables: { userId: UserStore.id } })

  return (
    <>
   { open &&

      <ModalContainer>

        <ModalHeader
          onClose={onClose} 
          title='Select Resume' 
          subtitle='Get insights for formatting issues, keywords, and more.' 
        />

        <div className='flex flex-col py-3 '>

          <div className='p-4 bg-blue-100 text-xs text-gray-600'>

            <p>
            Supported upload formats: 5MB max in .DOC, .DOCX, or .PDF
            </p>

          </div>

        {
          data && data.getUsersResumes.map((resume: IResume) => (

            <div className='flex flex-col' >
              <ResumeModalItem resume={resume} />
            </div>

          ))

        }
          
        </div>

        <CreateResumeFooter />

      </ModalContainer>
   }
   </>
   
   )
}

export default observer(CreateResumeModal)
