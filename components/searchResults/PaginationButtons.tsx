import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const PaginationButtons = () => {

  const router = useRouter()

  const statrIndex = Number(router.query.start) || 0 

  return (
    <div className='flex max-w-lg text-gray-700 mb-10 '>

      {statrIndex >= 10 && (

        <Link href={`/search?tern=` + router.query.tern + '&stqrt=' + (statrIndex - 10)}>
          <div className='flex flex-grow flex-col items-center hover:underline'>

            <ChevronLeftIcon className='h-5 ' />
            <p>Previos</p>

          </div>
        </Link>
      ) }

      <Link href={`/search?tern=` + router.query.tern + '&stqrt=' + (statrIndex + 10)}>
          <div className=''>

            <ChevronRightIcon className='h-5 ' />
            <p>Next</p>

          </div>
        </Link>
      
      
    </div>
  )
}

export default PaginationButtons
