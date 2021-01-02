import axios from 'axios';
import React from "react";

const Game = (props) => {

const [response, setResponse] = React.useState("");

const [countryData, setCountryData] = React.useState([{name:'I don\'t want this'}]);
const [randomCountry, setRandomCountry] = React.useState("Please Wait");
const getRandomCountry = () => {
setRandomCountry(countryData[0].name)
}
const getCountryData = () => {axios.get("../api/country").then((response) => {
  setCountryData(response.data);
  getRandomCountry();
});
getRandomCountry()};
const [choiceA, setChoiceA] = React.useState('Choice A');
const [choiceB, setChoiceB] = React.useState('Choice B');
const [choiceC, setChoiceC] = React.useState('Choice C');
const [choiceD, setChoiceD] = React.useState('Choice D');
const getChoiceA = () => setChoiceA('choice A -- CLICKED')
const getChoiceB = () => setChoiceB('choice B -- CLICKED')
const getChoiceC = () => setChoiceC('choice C -- CLICKED')
const getChoiceD = () => setChoiceD('choice D -- CLICKED')
React.useEffect(getCountryData,[]);

return(
    <div>
    <div>{countryData[0].name}</div>
    <div>{randomCountry}</div>
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceA}
        >
          {choiceA}
        </button>
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceB}
        >
          {choiceB}
    </button>
        <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceC}
        >
          {choiceC}
        </button>
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceD}
        >
          {choiceD}
        </button>
    </div>
    )
}

export default Game;