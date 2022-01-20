import React from 'react';

import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { IResume } from '@/models/.'
import { dayts } from '@/lib/dayjs'

import dynamic from 'next/dynamic'
import { IMenuItem } from '@/models/.'

import { Suspense } from 'react'
import { usePDF, useToggle } from '@/hooks/.';

import { useMutation } from '@apollo/client';
import { DELETE_RESUME, GET_USERS_RESUMES } from '@/gql/queries';

import { useNavigation } from '@/hooks/.' 

const ResumeModalItem: React.FC<{resume: IResume}> = ({resume}) => {

  const ContainerMenu = dynamic(() => import('@/components/containers/ContainerMenu'))
  const { donwloadPDF } = usePDF(resume)

  const { pushRouter } = useNavigation()

  const [deleting, changeDeleting] = useToggle(false)

  const [deleteResume] = useMutation(DELETE_RESUME)

  const removeResume = () => {
    changeDeleting(true)

    deleteResume({ variables: { resumeId: resume.id }, refetchQueries: [GET_USERS_RESUMES] })
  }  

  const [open, changeOpen] = useToggle(false)

  const menuItems: IMenuItem[] = [
    {
      cd: donwloadPDF.bind(null),
      text: 'Download Resume'
    },
    {
      cd: removeResume.bind(null),
      text: 'Delete Resume'
    },
    {
      cd: () => {},
      text: 'Update Resume'
    },
  ]

  return (
    <div
      onClick={pushRouter.bind(null, '/resume/' + resume.id)}
      className={'resumeListItem ' + ( deleting && 'opacity-70 animate-pulse' )}>

      <div className='flex flex-col'>

        <p className='text-black font-semibold text-sm'>

          {resume.name}

        </p>

        <p className='text-gray-600'>
          { 'Edited at: ' + dayts(resume.createdAt).fromNow()}
        </p>

      </div>

      <div className='relative'>

        <BiDotsHorizontalRounded 
          onClick={changeOpen.bind(this, !open)}
          className='small_icon h-10 w-10 text-xl' />

        <Suspense
          fallback={ <p >Loading..</p> }
        >
         
          <div className={'absolute transition-all duration-200 -left-24 ' + (open ? 'opacity-100 visible' : 'opacity-0 invisible')}>

            <ContainerMenu 
              close={changeOpen.bind(null, false)}
              menuItems={menuItems}
            /> 

          </div>
          
        </Suspense>

      </div>

    </div>
  )
};

export default ResumeModalItem;
