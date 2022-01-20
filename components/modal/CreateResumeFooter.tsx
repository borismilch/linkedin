import React from 'react'
import { useNavigation } from '@/hooks/.'

const CreateResumeFooter = () => {
  const { pushRouter } = useNavigation()

  return (
    <div className='modalFooter '>

      <button 
         onClick={pushRouter.bind(null, 'resume/' + 'gfodmfdskk')}
        className='banner_button-blue_outline'>Create From Profile</button>

      <button className='banner_button-blue'>Upload resume</button>
      
    </div>
  )
}

export default CreateResumeFooter
