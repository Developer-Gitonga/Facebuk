import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Post from './Post';

function Feed() {
  return (
      <div className='flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide'>
      <div className='max-w-md mx-auto md:max-w-lg lg:max-w-2xl'>
      <Stories />
        <InputBox />
        <Post/>
      </div>
    </div>
  );
}

export default Feed