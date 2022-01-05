import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm md-5 mt-3 '>
        About { results.searchInformation?.formattedTotalResults  +"  " } 
        Results ({ results.searchInformation?.formattedSearchTime } seconds )
      </p>

      {
        results.items?.map((result) => (
          <div
            key={result.link}
            className='max-w-xl mb-6'
          >

            <div className='group'>
              <a 
                href={result.link} 
                target={'_blank'}
                className='text-sm'
              >
                {result.formattedUrl}
                
              </a>

              <a
                href={result.link}
               >
                <h2 className='truncate text-xl group-hover:underline text-blue-800 font-semibold'>{result.title}</h2>
              </a>

            </div>

            <p className='line-clamp-2'>{result.snippet}</p>

          </div>
        ))
      }
    </div>
  )
}

export default SearchResults
