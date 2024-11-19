import React from 'react'
import ReactPlayer from 'react-player/lazy'

function YoutubeVideo() {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=5nKpApXuM1g' className='min-w-[100%] h-[50vh] sm:h-[80vh]' />
  )
}

export default YoutubeVideo