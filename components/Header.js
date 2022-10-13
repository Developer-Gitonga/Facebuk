import React from 'react'
import Image from 'next/image'
import Headerpic from '../public/facebook.png'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    CHevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'

function Header() {
    return (
      <div className='sticky top-0 z-50 flex items-center p-2 bg-white shadow lg:px-5-md">'>
        {/* left */}
        <div className="flex items-center">
          <Image
            className="p-10"
            src={Headerpic}
            width={40}
            height={40}
            layout="fixed"
          />
          <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-fullayout">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className="flex items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        {/* center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end sm:space-x-2">
          {/* profile pic */}
          <p className="pr-3 font-semibold whitespace-nowrap">Dev Git</p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    );
}

export default Header
 