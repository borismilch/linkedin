import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';


import { useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react';
import { GET_ALL_LINKS } from '../graphql/queries/links';

export default function Home() {

  const { loginWithRedirect, logout, user } = useAuth0()

  const { data, loading } = useQuery(GET_ALL_LINKS)

  if (loading) { return <p>Loading...</p> }

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <button 
          onClick={loginWithRedirect}
          className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-4 transition-all duration-200 cursor-pointer'>Login
        </button>

        <img src={user?.picture}  alt="" />

        <button 
          onClick={async () => await logout()}
          className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-4 transition-all duration-200 cursor-pointer'>Logout
        </button>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.map((link) => (
            <AwesomeLink
              key={link.id}
              url={link.url}
              id={link.id}
              category={link.category}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
