import React, { useEffect } from 'react'
import { useNavigation } from '@/hooks/.'

import { GET_USER_BY_ID } from '@/gql/queries/.'
import { GET_RESUME_BY_ID } from '@/gql/queries/ResumeQueries'

import { useQuery } from '@apollo/client'
import { ResumeForm, ResumeSidebar } from '@/components/pages/resume'

import { FaInfoCircle } from 'react-icons/fa'
import Layout from '@/components/Layout'

import { UserStore } from '@/store/index'
import { observer } from 'mobx-react-lite'

import { apolloClient } from '@/lib/apollo'
import { IResume } from '@/models/.'

const Resume: React.FC  = () => {

  const {pushRouter, query} = useNavigation()
  const { data, loading }= useQuery(GET_USER_BY_ID, { variables: { userId: query.id } })

  const initialValue = {

  }

  if (loading) { return <p>Loading...</p> }


  return (
    <Layout title='resume' isResume>

      <div className='app_container flex-col'>

        <div className='flex items-center my-4 text-gray-700 gap-2'>
          <FaInfoCircle />

          <p className='text-sm'>Your resume is only visible to you. Changes will not update on your profile.</p>
        </div>

        <div className='flex gap-5 items-start'>
          <ResumeForm 
            
          />

          <div className='w-[340px]'>

            <ResumeSidebar />

          </div>

        </div>

      </div>

    </Layout>
  )
}

export default observer(Resume)

