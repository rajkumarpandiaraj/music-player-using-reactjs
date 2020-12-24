import React from 'react'

function Details(props) {
    const { song } = props
    return (
        <div className='c-details'>
            <img src={song.img_src} alt='Thumbnail'/>
            <p>{song.title}</p>
            <p className='artist'>{song.artist}</p>
        </div>
    )
}

export default Details
