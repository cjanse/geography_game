const MainMenu = (props) => {
    return (
      <>
      <div className = "bg-gray-400 flex flex-col flex-center justify-center h-screen">
      <div className = "flex flex-col text-center items-center">
        <div className="bg-gray-400">
        <div className="text-7xl font-bold italic mb-4 rounded-lg bg-yellow-700 text-white">Guess the Capital!</div>
        <div className="text-lg mb-2">High Score: {props.highscore}</div>
        <div className="text-lg text-bold font-serif">How to Play</div>
        <ul className="mb-3">
            <li>A place's name will appear</li>
            <li>Guess the place's capital from 4 choices</li>
            <li>The game ends when you get one wrong</li>
            <li>Can you get to 250?</li>
        </ul>
        <button
          className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-indigo-700"
          onClick={props.onStart}
        >BEGIN</button>
        </div>
        </div>
      </div>
      </>
    );
  };
  
  export default MainMenu;