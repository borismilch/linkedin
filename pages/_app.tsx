import '../styles/tailwind.css';
import Layout from '../components/Layout';

import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (

    <Auth0Provider
      domain='dev-ly2qm2-a.us.auth0.com'
      clientId='JbCnnNlpbtSmfMqOpWWuMk5q9DSH0b4a'
      redirectUri={process.env.CLIENT_URL}
      
    >

    <ApolloProvider client={apolloClient}>

    <Layout>
      <Component {...pageProps} />
    </Layout>

    </ApolloProvider>


   </Auth0Provider>

  

  );
}

export default MyApp;
