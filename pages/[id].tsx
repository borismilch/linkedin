import React, { useEffect } from 'react'
import { useNavigation, useToggle } from '@/hooks/.'

import Layout from '@/components/Layout'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { ProfileBanner } from '@/components/pages/profile' 
import { GET_USER_BY_ID, VIEW_USER } from '@/gql/queries/.'

import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'
import { useQuery, useMutation } from '@apollo/client'

import { observer } from 'mobx-react-lite'
import { UserStore } from '@/store/index'

const Profile: React.FC = () => {

  const {pushRouter, query} = useNavigation()
  const [loaded, changeLoaded] = useToggle(false) 

  const [viewUser] = useMutation(VIEW_USER, { variables: { userId: UserStore } })

  const { data, loading } = useQuery(GET_USER_BY_ID, { variables: { userId: query.id }})

  const InfoSideabr = dynamic(() => import('@/components/pages/rightSidebar/InfoSidebar'))

  useEffect(() => {
    viewUser()
  }, [])

  useEffect(() => {
    changeLoaded(true)
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout title='user'>

      <div className='flex w-full gap-8 app_container'>

        <div className='flex flex-col flex-grow'>

          <ProfileBanner user={data.getUserById} />
           
        </div>

      { loaded && <Suspense fallback={ <p>Loading...</p> }>
          <InfoSideabr />
        </Suspense>}
      </div>
      
    </Layout>
  )
}

export default observer(Profile)