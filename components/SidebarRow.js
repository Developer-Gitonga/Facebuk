import React from 'react'
import Image from 'next/image'

function SidebarRow({ src, Icon, title }) {
  return (
      <div>
          {src && (
              <Image
                  className="rounded-full"
                  src={src}
                  width={30}
                  height={30}
                  layout="fixed"
              />
          )}
          {Icon && (
              <Icon className="w-8 h-8 text-blue-500"/>
          )}
          <p className='hidden font-medium sm:inline-flex'>{title}</p>
    </div>
  )
}

export default SidebarRow