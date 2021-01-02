import axios from 'axios';
import React from "react";
import MainMenu from '../components/MainMenu';
import Game from '../components/Game';

export default function Home() {

  const [playing, setPlaying] = React.useState(false);
  const start = () => {
    setPlaying(true);
  }

  return (
    <div>
      {playing ? (<Game/>)
      :(
        <MainMenu onStart={start}/>
      )}

    </div>
  )
}
