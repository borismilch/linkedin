
import Layout from '../components/Layout';
import { getSession } from '@auth0/nextjs-auth0';
import { IUser } from '@/models/.';
import { useEffect } from 'react';

import { defaultImageBg } from '@/utils/mock/vars'
import { PostForm } from '@/components/pages/posts';

import { CHECK_USER, ADD_POST, GET_ALL_POSTS } from '@/gql/queries';
import {apolloClient} from '@/lib/apollo'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { observer } from 'mobx-react-lite'
import UserStore from '@/store/UserStore';
import { NextApiRequest, NextApiResponse } from 'next';
import { LeftSidebarList } from '@/components/pages/leftSidebar';

const Home: React.FC<{session: IUser}> = ({session}) => {

  const UserSidebar = dynamic(() => import('@/components/pages/leftSidebar/UserSidebar'))
  const InfoSideabr = dynamic(() => import('@/components/pages/rightSidebar/InfoSidebar'))
  const PostList = dynamic(() => import('@/components/pages/posts/post/postList'))

  useEffect(() => {
    if (session) UserStore.setUser(session)

  }, [session])

  return (
    <Layout title='Some App'>

      <div className='app_container gap-6'>

       { UserStore.isAuthetheficated && 

        <Suspense fallback={ <p>Loading...</p> } >

          <div className='flex flex-col w-full max-w-[220px]'>

            <UserSidebar />

            <div className='mt-6 sticky top-[90px]'>
              <LeftSidebarList />
            </div>

          </div>


        </Suspense>  }

        <div className='flex flex-col flex-grow'>

         {UserStore.isAuthetheficated && <PostForm mutation={ADD_POST} refetchQueries={[GET_ALL_POSTS]} />}

        { UserStore.isAuthetheficated && <Suspense fallback={ <p>Loading...</p> }>

           <PostList />
         </Suspense>}

        </div>
          
        <InfoSideabr />
         
      </div>
    
    </Layout>
  );
}

export default observer(Home)

export async function getServerSideProps({req, res}: {req: NextApiRequest, res: NextApiResponse}) {

  const {user: { name, email, picture }} = JSON.parse(JSON.stringify(getSession(req, res)))

  const userInput = { name, email, picture, bgImage: defaultImageBg, bio: '...' }

  const {data} = await apolloClient.mutate({
    mutation: CHECK_USER,
    variables: { userInput }
  })

  return {
    props: {
      session: data.checkUser
    }
  }

}