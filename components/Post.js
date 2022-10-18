import React from 'react'
import Image from 'next/image'

function Post() {
  return (
    <div>
      <div>
        <div>
          <Image />
        </div>
        <div>
          <p>{name}</p>
          <p></p>
              </div>
              <p>{message}</p>
          </div>
          {postImage && (
              <div>
                  <Image/>
              </div>
          )}
    </div>
  );
}

export default Post