import React from 'react'
import { useCollection } from "react-firebase-hooks"
import { db } from "../firebase"
import Post from './Post'

function Posts() {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    )
    return (
    <div>
        {realtimePosts?.docs.map((post) => (
                    <Post
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().Posts}
                    />   
        ))}
    </div>
  )
}

export default Posts