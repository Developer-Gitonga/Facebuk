import React from 'react'

function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer rounded-xl md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500">
      <Icon className={`h-5 mx-auto text-center text-gray-500 sm:h-7 group-hover:text-blue-500 ${active && 'text-blue-500'}`} />
    </div>
  );
}

export default HeaderIcon