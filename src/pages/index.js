import axios from 'axios';
import React from "react";
import MainMenu from '../components/MainMenu';
import Game from '../components/Game';

export default function Home() {

  const [playing, setPlaying] = React.useState(false);
  const start = () => {
    setPlaying(true);
  }

 

  const [highscore, setHighscore] = React.useState(0); 

 const gameover = (score) => {
  if (score > highscore) {
    setHighscore(score);
  }
  setPlaying(false);
};

  return (
    <div>
      {playing ? (<Game onGameOver={gameover} highscore={highscore}/>)
      :(
        <MainMenu onStart={start} highscore={highscore}/>
      )}

    </div>
  )
}
