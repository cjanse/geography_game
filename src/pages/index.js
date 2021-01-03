import axios from 'axios';
import React from "react";
import MainMenu from '../components/MainMenu';
import Game from '../components/Game';

export default function Home() {

  const [playing, setPlaying] = React.useState(false);
  const start = () => {
    setPlaying(true);
  }

  const gameOver = () => {
    setPlaying(false);
  }

  return (
    <div>
      {playing ? (<Game onGameOver={gameOver}/>)
      :(
        <MainMenu onStart={start}/>
      )}

    </div>
  )
}
