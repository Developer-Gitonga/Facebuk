import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { unstable_getServerSession } from 'next-auth'
import { useSession, signIn, signOut } from 'next-auth/react'
import { authOptions } from "./auth/[...nextauth]"


export default function Home() {
  // if (!session) return <Login />
  
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

// export async function getServerSideProps(context) {
//   // Get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session
//     }
//   }
// }

export async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}