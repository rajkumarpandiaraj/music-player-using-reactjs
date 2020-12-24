import './App.css';
import {useState} from 'react';
import musicList from './data';
import Player from './component/Player';

function App() {
  const [songs] = useState(musicList);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1)
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Player songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        setNextSongIndex = {setNextSongIndex}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
      />
    </div>
  );
}

export default App;
