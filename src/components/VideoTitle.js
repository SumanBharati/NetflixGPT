import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='m-1 text-2xl w-1/3'>{overview}</p>
        <div>
            <button className='py-4 px-10 bg-white text-2xl font-semibold text-black rounded-lg hover:bg-opacity-40 hover:text-white'><PlayArrowIcon />Play</button>
            <button className='mx-1 py-4 px-10 bg-white text-2xl font-semibold text-black rounded-lg hover:bg-opacity-40 hover:text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;