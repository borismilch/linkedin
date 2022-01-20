import React, { useEffect } from 'react'
import Image from 'next/image'

import { AiFillCamera } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
 
import { IUser } from '@/models/.'
import { BannerUserPicture, BannertherInfo } from '.'
import { useUploadData, useToggle } from '@/hooks/.'
import { ImageLoader } from '@/components/loaders/.'
import { useInputValue, useModal } from '@/hooks/.'

import dynamic from 'next/dynamic'

import { observer } from 'mobx-react-lite'
import { UserStore } from '@/store/.'

import { UPDATE_USER, CHECK_USER, GET_USER_BY_ID } from '@/gql/queries'
import { useMutation } from '@apollo/client'

const ProfileBanner: React.FC<{user: IUser}> = ({user}) => {

  const {bind: bindedValue, changeOpen} = useModal()

  const [canSave, changeCanSave] = useToggle(false)
  const [updateUser] = useMutation(UPDATE_USER)

  const { dataUrl, loading, url, bind, triggerInput, cleanImage } = useUploadData('users/bg/')
  const [val, f, fd, changeValue] = useInputValue('')

  const CreateResumeModel = dynamic(() => import('../../modal/CreateResumeModal'))

  const updateUserImages = () => {
    const userData = {
      picture: val ? val : user.picture,
      bgImage: url ? url : user.bgImage
    }

    updateUser({ variables: { userInput: userData, userId: UserStore.id },
    refetchQueries: [CHECK_USER, GET_USER_BY_ID ] }) 

    changeCanSave(false)
  }

  useEffect(() => {
    changeCanSave(!!url || !!val)
  }, [val, url])

  return (
    <div className='flex flex-col rounded-xl pb-4 overflow-hidden drop-shadow bg-white'>

      <div className='w-full h-[195px] relative'>

        <CreateResumeModel {...bindedValue} />

        <input 
          type="file" 
          hidden 
          {...bind}
        />

        { loading && <ImageLoader />}

        <Image 
          alt='dddd'
          layout='fill'
          objectFit='cover'
          src={dataUrl ?  dataUrl : user.bgImage}
        />

      { !dataUrl ?  
       ( <div 
          className='circle_button z-50'
          onClick={triggerInput.bind(null)}
        >
          <AiFillCamera className='text-2xl text-blue-600' />
        </div>) : (

          <button
            className='circle_button z-50'
            disabled={loading}
            onClick={cleanImage.bind(null)}
          >
            <IoMdClose className='text-xl text-blue-600' />
          </button>
        )
        
      }

      </div>

       <div className='flex flex-col bg-white text-gray-700'>

        <BannerUserPicture changeAvatarImageUrl={changeValue}  user={user} />

        <BannertherInfo user={user} />

         <div className='flex items-center gap-4 mt-3 px-4'>

          <button className='banner_button-blue '>Open to</button>
 
          { <button 
              onClick={changeOpen.bind(null, true)}
              className='banner_button-blue_outline'>Add profile section
            </button>}

          <button className='banner_button-blue_outline'>More</button>

          { canSave && 
          <button 
            onClick={updateUserImages.bind(null)}
            className='banner_button-blue'
            >
              Save
            </button> 
          }
        </div>

        </div>
      
    </div>
  )
}

export default observer(ProfileBanner)
