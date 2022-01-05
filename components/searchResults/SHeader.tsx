import React, { ChangeEvent, SyntheticEvent } from 'react'
import Image from 'next/image'

import { MicrophoneIcon, SearchIcon,  } from '@heroicons/react/solid'

import { useRouter } from 'next/router'
import { useState } from 'react'

import HeaderTabs from './HeaderTabs'

import { XIcon } from '@heroicons/react/solid'

const SHeader = () => {

  const router = useRouter()

  const [search, setSearch] = useState<string>('')

  const pushRouter = () => {
    router.push('/')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

  }

  const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault ()

    if (!search) { return }

    router.push({
      pathname: '/search/',
      query: { tern: search }
    })

  }

  return (
    <header className='items-center w-full flex flex-col sticky top-0 bg-white'>

      <div className='flex items-center p-6 w-full'> 
      
      <Image 
        onClick={pushRouter.bind(null)}
        src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
        height={40}
        width={120}
        className='cursor-pointer'
      />

      <form
        onSubmit={submitHandler.bind(null)}
        className='flex border px-6 py-1 ml-5 md:ml-10 mr-4  placeholder-gray-500  border-gray-300 rounded-full w-full shadow-lg max-w-3xl items-center '
        >
          <input
            type="text" 
            onChange={changeHandler} 
            value={search} 
            placeholder='T  ype something...'
            className='flex flex-grow outline-none w-full border-0 focus:outline-none focus-within:ring-0' 

          />

          { search && <XIcon
            onClick={() => setSearch("")}
            className='header_icon h-6 w-6 mr-3' 
          />}

          <div className='gap-2 hidden sm:flex'>

            <MicrophoneIcon
              className='header_icon w-10 text-blue-500 pl-3 border-l-2 border-gray-300'
            />

            <SearchIcon className='header_icon text-blue-500' />

            <button className='hidden text-blue-400 transition-all duration-200 active:scale-90  md:flex' type='submit'>Search</button>
            
          </div>

        </form>

        <img
          src={'https://lh3.googleusercontent.com/ogw/ADea4I7L-FuwRimdWdhK_rVEME1LwqyGwoLJlSXQyQuUyw=s83-c-mo'} 
          className='avatar transition-all duration-200 hover:scale-90 cursor-pointer ml-auto' 
          alt="kk" 

        />

      </div>

      <HeaderTabs />
      
    </header>
  )
}

export default SHeader
