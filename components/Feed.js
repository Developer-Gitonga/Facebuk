import React from 'react'
import Stories from './Stories';

function Feed() {
  return (
      <div className='flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 '>
      <div className='max-w-md mx-auto md:max-w-lg lg:max-w-2xl'>
      <Stories />
        {/* Inputbox */}
        {/* Post */}
      </div>
    </div>
  );
}

export default Feed