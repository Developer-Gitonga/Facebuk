import React from 'react'
import Image from 'next/image'
import UserPic from '../public/user.png'
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { db } from '../firebase'
// import firebase from 'firebase'

function InputBox() {

  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
// const [imageToPost, setImageToPost] = useState(null)
  
  const sendPost = (e) => {
    e.preventDefault();
  
    if (!inputRef.current.value) return;
  
    db.collection('posts').add[{
      message: inputRef.current.value,
      name: user.name,
      email: user.email,
      image: user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }]
    inputRef.current.value = ""; 
  }
  
  // const addImageToPost = (e) => (
  //   const reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0])
  //     reader.onload = (readerEvent) => {
  //       setImageToPost(readerEvent.target.results)
  //     }
  //   }
  // )
  
  return (
    <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
      <div className="flex items-center p-4 space-x-4">
        <Image
          className="rounded-full"
          src={UserPic}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder="What's currently on your mind"
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex p-3 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>

        <div className="inputIcon">
          <CameraIcon className="text-green-400 h-7" />
          <p className="text-xs sm:text-sm">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox