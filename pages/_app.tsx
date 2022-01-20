import '../styles/index.css';

import apolloClient from '@/lib/apollo'

import { ApolloProvider } from '@apollo/client';
import {UserProvider}  from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return (

    <ApolloProvider client={apolloClient}>
      
      <UserProvider>

      <Component {...pageProps} />

      </UserProvider>

    </ApolloProvider>

  );
}

export default MyApp;
