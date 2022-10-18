import { SERVER_DIRECTORY } from 'next/dist/shared/lib/constants';
import React from 'react'

const stories = [
  {
    name: "Dev Git",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

export default function Stories() {
  return (
      <div className='flex justify-center mx-auto space-x-3'>{stories.map(story => (
          <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
      
        </div>
  )
}

