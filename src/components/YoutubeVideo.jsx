import React from 'react'
import ReactPlayer from 'react-player/lazy'

function YoutubeVideo() {
  return (
    <ReactPlayer url='https://youtu.be/31z5qhIn_LA' className='min-w-[100%] min-h-[40vh] sm:min-h-[80vh]' />
  )
}

export default YoutubeVideo