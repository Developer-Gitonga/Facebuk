import React from 'react'
import Image from 'next/image'
import Headerpic from '../public/facebook.png'
import {
    BellIcon,
    ChatIcon,
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

function Header() {
    return (
      <div>
            {/* left */}
            <div className='flex items-center'>
                <Image className='p-10'
                    src={Headerpic}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className='flex items-center p-2 ml-2 bg-gray-100 rounded-fullayout'>
                    <SearchIcon className="h-6"/>
                    <input className="flex items-center ml-2 bg-transparent outline-none"
                        type="text" placeholder="Search Facebook" />
                </div>
            </div>
        {/* center */}
        {/* right */}
      </div>
    );
}

export default Header
 