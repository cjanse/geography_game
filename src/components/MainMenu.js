const MainMenu = (props) => {
    return (
      <>
        <div className="bg-gray-400">
        <div className="text-7xl font-bold italic mb-4 bg-yellow-700 text-white">Guess the Capital!</div>
        <div className="text-lg font-serif mb-3">How to Play</div>
        <ul>
            <li>A Country's name will appear</li>
            <li>Guess the country's capital from 4 choices</li>
            <li>The game ends when yout one wrong</li>
            <li>Can you guess all 250?</li>
        </ul>
        <button
          className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-indigo-700"
          onClick={props.onStart}
        >
          Quiero una cita
        </button>
        </div>
      </>
    );
  };
  
  export default MainMenu;