import React from 'react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  CHevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  ViewGridIcon,
  CalendarIcon,
  ClockIcon,
  ShoppingBagIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import SidebarRow from './SidebarRow'
import UserPic from '../public/user.png'

function Sidebar() {
  return (
      <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={UserPic} title="User"/>
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar