import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from '@heroicons/react/solid';


function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white shadow rounded-t-2xl-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* Footer of post */}
      <div className="flex items-center justify-between text-gray-400 bg-white border shadow-md rounded-b-2xl-t">
        <div className="rounded-none rounded-bl-2xl inputIcon">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="rounded-none inputIcon">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="rounded-none inputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post