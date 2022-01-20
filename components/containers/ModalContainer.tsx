import React from 'react'
import ReactDOM from 'react-dom'

const ModalContainer: React.FC<{centered?: boolean, width?: number}> = ({ children, centered, width = 750 }) => {

  return ReactDOM.createPortal(
   ( <div className={'fixed inset-0 z-50 h-screen w-screen bg-black bg-opacity-60 flex justify-center ' +
    (centered ? 'justify-center items-center' : 'pt-[30px]')}>

    <div className='bg-white w-full overflow-auto rounded-lg max-h-[64%] mx-[12px] drop-shadow-md  flex flex-col pt-[70px] relative' style={{maxWidth: width}}>

      {children}      

    </div>
      
    </div>), document.body
  )
}

export default ModalContainer
