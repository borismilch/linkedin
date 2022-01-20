import React, { useEffect } from 'react';

import { Headeractions, HeaderSearch, HeaderResumeAddition } from '.';

import { useMutation } from '@apollo/client'
import { observer } from 'mobx-react-lite'
import { useUser } from '@auth0/nextjs-auth0'

import { UserStore } from '@/store/.'
import { defaultImageBg } from '@/utils/mock/vars';
import { CHECK_USER } from '@/gql/queries';

const Header:React.FC<{isResume?: boolean}> = ({isResume = false}) => {

  const {user} = useUser()

  const userInput = {bgImage: defaultImageBg, bio: '...' }

  const [getUser, { data }] = useMutation(CHECK_USER)

  useEffect(() => {
    if (!UserStore.isAuthetheficated && user) {
      const { name, email, picture,} = user
      getUser({ variables: { userInput: {...userInput, name, email, picture} } })
    }
  }, [])

  useEffect(() => {
    if (data && !UserStore.isAuthetheficated) {
      UserStore.setUser(data.checkUser)
    }
  }, [data])

  return (
    <>
    <header className='bg-white w-full fixed top-0 z-50'>

      <div className='app_container items-center justify-between'>

        <HeaderSearch /> 

        <Headeractions />

      </div>

      {isResume && <HeaderResumeAddition />}

    </header>
    {isResume && <div className='h-[45px]'></div>  }
    </>
  );
};

export default observer(Header);
