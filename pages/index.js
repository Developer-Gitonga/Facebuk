import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { getSession } from 'next-auth/client'

export default function Home({ session }) {
  if (!session) return <Login />
  
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Connect and network for free" />
        <link rel="icon" href="facebook.png" />
      </Head>
      {/* Header */}
      <Header/>

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}