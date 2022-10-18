import React from 'react'
import Image from 'next/image'
import UserPic from '../public/user.png'


function InputBox() {
  return (
      <div className='p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl'> 
          <div className='flex items-center p-4 space-x-4'>
              <Image
                  className='rounded-full'
                  src={UserPic}
                  width={40}
                  height={40}
                  layout="fixed"
              />
              <form className='flex flex-1'>
                  <input className='flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none'
                      type="text"
                      placeholder="What's currently on your mind"
                  />
                  <button hidden type='submit'>Submit</button>
              </form>
          </div>
    </div>
  )
}

export default InputBox