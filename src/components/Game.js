import axios from 'axios';
import React from "react";
import Waiting from "./Waiting"
import Questions from "./Questions"

const Game = (props) => {

const [response, setResponse] = React.useState("");
const [countryData, setCountryData] = React.useState([{name:'Please Wait'}]);

const getCountryData = () => {axios.get("../api/country").then((response) => 
  setCountryData(response.data))};
React.useEffect(getCountryData,[]);

return(
    <div>
    <div>{(countryData[0].name == 'Please Wait') ? (<Waiting/>) 
    : (
      <Questions onGetCountryData={getCountryData} onCountryData={countryData} highscore={props.highscore} ononGameOver={props.onGameOver}/>
    )}</div>
    </div>
)
}

export default Game;