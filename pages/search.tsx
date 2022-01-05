import React from 'react'
import Head from 'next/head'
import Header from '../components/searchResults/SHeader' 

import {response} from '../response'

import { API_KEY, API_CONTEXT } from '../keys'
import { useRouter } from 'next/router'
import SearchResults from '../components/searchResults/SearchResults'

import PaginationButtons from '../components/searchResults/PaginationButtons'

const Search: React.FC<{results: any}> = ({results}) => {

  const router = useRouter()

  return (
    <div>

      <Head >
        <title>{router.query.tern} = Google Search</title>
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <Header />

      <SearchResults results={results} />

      <PaginationButtons />
    
    </div>
  )
}

export default Search

export async function getServerSideProps({req}) {

  const useDummyData = false 

  const startIndex = req.start || "0"

  const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${API_CONTEXT}&q=${req.tern}&start=${startIndex}`)
  .then((response) => response.json())

  return {
    props: {
      results: data
    }
  }
}