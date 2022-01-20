import React, { SyntheticEvent } from 'react'
import Image from 'next/image'

import {DocumentNode} from 'graphql'

import {UserStore} from '@/store/index'
import { observer } from 'mobx-react-lite'

import { useUploadData, useInputValue } from '@/hooks/index'

import { BsYoutube } from 'react-icons/bs'
import { useMutation } from '@apollo/client'

import { PostFormAction } from '..'

import { MdOutlinePhotoSizeSelectActual, MdEventAvailable, MdOutlineArticle } from 'react-icons/md'
import ImageLoader from '@/components/loaders/ImageLoader'

const PostForm: React.FC<{mutation: DocumentNode, refetchQueries: DocumentNode[]}> = ({mutation, refetchQueries}) => {

  const [postAction] = useMutation(mutation)

  const {dataUrl, url, loading, onFileChange, triggerInput, fileInputRef, cleanImage} = useUploadData('/posts/images')

  const [title, bind, cleanTitle] = useInputValue()

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (!url) {return} 

    const newPost = {
      title,
      image: url,
      userId: UserStore.id,
      createdAt: Date.now().toString()
    }

    postAction({variables: {postInput: newPost}, refetchQueries})

    cleanTitle()
    cleanImage()

    console.log('done')
  }

  return (
    <div className='flex flex-col drop-shandow-md p-1 drop-shadow bg-white rounded-2xl overflow-hidden'>

      <input type="file" hidden onChange={onFileChange} ref={fileInputRef}  />

      <form 
        onSubmit={onSubmit}
        className='flex items-center gap-2 p-2 px-3 '>

        <div 
          className='avatar rounded-[50%] w-full max-w-[42px]'>

          <Image 
            alt='ddd'
            objectFit='cover'
            layout='fill'
            src={UserStore.picture}
          />

        </div>

        <input
          type="text" 
          className='wide_input' 
          placeholder='Start a post...' 
          {...bind}
        />

       { dataUrl && 

         <div 
           onClick={cleanImage.bind(null)}
           className='small-pic relative'>
          <Image 
            layout='fill'
            src={dataUrl}
          />

          {loading && <ImageLoader />}

         </div>
       }

      </form>  

      <div className='flex items-center justify-between  px-4'>

      <PostFormAction 
        Icon={ <MdOutlinePhotoSizeSelectActual className='text-xl text-blue-500' /> } 
        title='Photo'
        cb={triggerInput.bind(null)}
      />

      <PostFormAction 
        Icon={ <BsYoutube className='text-xl text-red-500' /> } 
        title='Video'
        cb={() => {}}
      />

      <PostFormAction 
        Icon={ <MdEventAvailable className='text-xl text-amber-500' /> } 
        title='Event'
        cb={() => {}}
      />

      <PostFormAction 
        Icon={ <MdOutlineArticle className='text-xl text-red-700' /> } 
        title='Write Article'
        cb={() => {}}
      />
      
      </div> 

    </div>
  )
}

export default observer(PostForm)
