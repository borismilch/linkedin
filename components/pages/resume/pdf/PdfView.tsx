import React from 'react';
import { IResume } from '@/models/.'

const PdfView:React.FC<{resume: IResume}> = ({resume}) => {

  const titles = Object.keys(resume)

  return (
    <div>
      {
        titles.map(key => (
          <div className='flex flex-col'>

            <p className='text-black text-xs'>
              {key}
            </p>

            <p className='text-gray-600 xs'>

              {resume[key]}

            </p>

          </div>
        ))
      }
    </div>
  )
};

export default PdfView;
