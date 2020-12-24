import React from 'react';
import { FaPlay,FaPause,FaForward,FaBackward } from 'react-icons/fa'

function Control(props) {
    const {currentSongIndex, songs, setCurrentSongIndex, isPlaying, setIsPlaying,} = props;
    const skipSongs = (forward) =>{
        if(forward){
            if(currentSongIndex === songs.length - 1){
                setCurrentSongIndex(0)
            }else{
                setCurrentSongIndex(currentSongIndex + 1)
            }
        }else{
            if(currentSongIndex === 0){
                setCurrentSongIndex(songs.length - 1)
            }else{
                setCurrentSongIndex(currentSongIndex - 1)
            }
        }
    }
    return (
        <div className='c-control'>
            <button className='skip-btn' onClick={() => skipSongs(false)}>
                <FaBackward/>
            </button>
            <button className='play-btn' onClick={()=> setIsPlaying(!isPlaying)}>
                {
                    isPlaying ? <FaPause/> : <FaPlay/>
                }
            </button>
            <button className='skip-btn' onClick={() => skipSongs(true)}>
                <FaForward/>
            </button>
        </div>
    )
}

export default Control
