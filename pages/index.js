import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { unstable_getServerSession } from 'next-auth'
import { useSession, signIn, signOut } from 'next-auth/react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'


export default function Home() {
  // if (!session) return <Login />
  
  return (
    <div className='h-screen overflow-hidden bg-gray-100'>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="facebook.png" />
      </Head>
      {/* Header */}
      <Header />
      
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
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

// export async (req, res) => {
//   const session = await unstable_getServerSession(req, res, authOptions)
//   if (session) {
//     res.send({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     })
//   } else {
//     res.send({
//       error: "You must be signed in to view the protected content on this page.",
//     })
//   }
// }