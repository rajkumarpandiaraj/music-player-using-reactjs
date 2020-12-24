import React from 'react';
import Details from './Details';
import Control from './Control';
import { useRef, useEffect } from 'react';

function Player(props) {
    const {songs, currentSongIndex, nextSongIndex, setCurrentSongIndex, setNextSongIndex , isPlaying, setIsPlaying} = props;
    const audioEl = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })
    useEffect(() => {
        if(currentSongIndex === songs.length - 1){
            setNextSongIndex(0)
        }else{
            setNextSongIndex(currentSongIndex + 1)
        }
    }, [currentSongIndex])
    return (
        <div className='c-player'>
            <h4>Playing Now</h4>
            <audio src={songs[currentSongIndex].song_src} ref={audioEl}/>
            <Details song={songs[currentSongIndex]}/>
            <Control currentSongIndex={currentSongIndex}
                setNextSongIndex={setNextSongIndex}
                songs = {songs}
                setCurrentSongIndex = {setCurrentSongIndex}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <p><strong>Next Song : </strong>{songs[nextSongIndex].title}</p>
        </div>
    )
}

export default Player
