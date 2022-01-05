import React, { ChangeEvent, SyntheticEvent } from 'react'
import Image from 'next/image'

import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchInput = () => {

  const router = useRouter()

  const [search, setSearch] = useState<string>('')

  const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (!search) { return }

    router.push({
      pathname: '/search/',
      query: { tern: search }
    })

    setSearch('')

  }

  const chagenHadler = (e: ChangeEvent<HTMLInputElement>) =>  {
    setSearch(e.target.value)

  }

  return (
    <form
      onSubmit={submitHandler.bind(null)}
      className='w-full'>
      <div className='flex flex-col items-center justify-center gap-3'>

      <Image
        src={'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'} 
        width={300} 
        height={100} 
      />    

      <div className='flex items-center hover:shadow-lg w-full focus-within:shadow-lg max-w-md sm:max-w-xl  lg:max-w-2xl rounded-full border border-gray-300 px-6 p-1'>
        <SearchIcon className='h-5 w-5 mr-3 text-gray-500' />
        
        <input
          type="text" 
          value={search}
          className='outline-none ring-0 focus:outline-none focus:ring-0 flex-grow border-0'
          onChange={chagenHadler.bind(null)}
         />

        <MicrophoneIcon className='h-5 w-5 text-gray-500' />
      </div>  

      <div className='flex items-center gap-4 py-3 flex-col sm:flex-row'>

        <button className='serch_input_button'>Google Search</button>

        <button className='serch_input_button'>I'm Feeling Lucky</button>

      </div>

      </div>
   
    </form>
  )
}

export default SearchInput
