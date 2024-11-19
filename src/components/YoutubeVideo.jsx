import React from 'react'
import ReactPlayer from 'react-player/lazy'

function YoutubeVideo() {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=1ZYbU82GVz4a' className='min-w-[100%] min-h-[40vh] sm:min-h-[80vh]' />
  )
}

export default YoutubeVideo