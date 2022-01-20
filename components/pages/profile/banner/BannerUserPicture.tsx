import React, { useEffect } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { IUser } from '@/models/index'

import Image from 'next/image'
import { useUploadData } from '@/hooks/.'
import { ImageLoader } from '@/components/loaders' 
import { observer } from 'mobx-react-lite'

import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai'

const ProfileBannerInfo: React.FC<{user: IUser, changeAvatarImageUrl: (val: string) => void}> = ({user, changeAvatarImageUrl}) => {

  const { dataUrl, loading, url, bind, triggerInput, cleanImage } = useUploadData('users/pictures/')

  useEffect(() => {
    changeAvatarImageUrl(url)
  }, [url])

  return (
    <div className='flex items-center w-full p-3 relative z-20'>

      <input 
        type="file" 
        hidden 
        {...bind}
      />

    <div className='transform  p-1 -translate-y-14 translate-x-2 bg-white border-gray-300 border absolute rounded-[50%]'>

    <div className='avatar-xxl z-50 group'>
      <Image 
        onClick={triggerInput.bind(null)}
        src={dataUrl ? dataUrl : user.picture}
        layout='fill'
      />
      
      { loading &&
        <ImageLoader centered />
      }

    { dataUrl ?  <div className='hoverable_overlay'>

        <button
          onClick={cleanImage.bind(null)}
          className='circle_button relative top-0 left-0'>
          <AiOutlineClose className='text-2xl text-blue-600 font-semibold ' />
        </button>
          
      </div> : (
        <div className='hoverable_overlay'>

        <button
          onClick={triggerInput.bind(null)}
          className='circle_button relative top-0 left-0'>
          <AiOutlineCamera className='text-2xl text-blue-600 font-semibold ' />
        </button>
          
      </div>
      )
    }


     </div>

    </div>
    <div className='flex-grow flex items-center justify-end'>

      <BsPencilSquare className='text-xl text-gray-600 hover:text-gray-900 transition-all duration-200 cursor-pointer ' />

    </div>

  </div>
  )
}

export default observer(ProfileBannerInfo)
