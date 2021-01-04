import axios from 'axios';
import React from "react";

var usedNumbers = [];

const Questions = (props) => {

const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let randomNumber = randint(0,249);
function isUsedNumber() {
    //console.log(usedNumbers.length);
    let i = 0;
    for (i = 0; i < usedNumbers.length; i++)
    {
        //console.log("inside loop for usedNumbers")
        if (usedNumbers[i] == randomNumber){
            return true;
        }
    }
    return false;
}
function randomNumberGenerator() {
        //console.log("inside randomNumberGenerator")
        while(isUsedNumber()){
            //console.log('generating number...')
            randomNumber = randint(0,249); 
        } 
        usedNumbers.push(randomNumber);
        console.log('usedNumber.length');
        console.log(usedNumbers.length)
    }

function nextQuestion(){
    mainFunction();
}

const [rightAnswer, setRightAnswer] = React.useState('si')
const [randomCountry, setRandomCountry] = React.useState('nada por las tardes')
const mainFunction = () => {
    //console.log("Main function accessed")
    randomNumberGenerator();
    //console.log('pass which ')
    setRandomCountry(props.onCountryData[randomNumber].name);
    let whichChoice = randint(0,3);
    //console.log(whichChoice)
    setRightAnswer(props.onCountryData[randomNumber].capital);
    if (whichChoice == 0){
        //console.log("0 accessed");
        setChoiceA(props.onCountryData[randomNumber].capital);
        setChoiceB(props.onCountryData[randint(0,249)].capital);
        setChoiceC(props.onCountryData[randint(0,249)].capital);
        setChoiceD(props.onCountryData[randint(0,249)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 1){
        //console.log("1 accessed");
        setChoiceB(props.onCountryData[randomNumber].capital);
        setChoiceA(props.onCountryData[randint(0,249)].capital);
        setChoiceC(props.onCountryData[randint(0,249)].capital);
        setChoiceD(props.onCountryData[randint(0,249)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 2){
        //console.log("2 accessed");
        setChoiceC(props.onCountryData[randomNumber].capital);
        setChoiceB(props.onCountryData[randint(0,249)].capital);
        setChoiceA(props.onCountryData[randint(0,249)].capital);
        setChoiceD(props.onCountryData[randint(0,249)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 3){
        //console.log("3 accessed");
        setChoiceD(props.onCountryData[randomNumber].capital);
        setChoiceB(props.onCountryData[randint(0,249)].capital);
        setChoiceC(props.onCountryData[randint(0,249)].capital);
        setChoiceA(props.onCountryData[randint(0,249)].capital);
        //console.log(randomNumber);
    }
}

const loseGame = () => {
    console.log('oh no');
    score = usedNumbers.length;
    usedNumbers = [];
    if (score > props.highscore){
        props.ononGameOver(score);}
    else {
        props.ononGameOver(props.highscore);
    }
}

let score = 0;
const [choiceA, setChoiceA] = React.useState('Choice A');
const [choiceB, setChoiceB] = React.useState('Choice B');
const [choiceC, setChoiceC] = React.useState('Choice C');
const [choiceD, setChoiceD] = React.useState('Choice D');
const getChoiceA = () => {if (choiceA == rightAnswer){
    console.log('yay');
    nextQuestion();
}
else {
    console.log('oh no')
    score = usedNumbers.length;
    usedNumbers = [];
    props.ononGameOver(score);
}}
const getChoiceB = () => {if (choiceB == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
    nextQuestion();}
else {
   //console.log(rightAnswer);
    //console.log(randomNumber);
    loseGame();
}}
const getChoiceC = () => {if (choiceC == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
        nextQuestion();}
else {
    //console.log(rightAnswer);
    //console.log(randomNumber);
    loseGame();
}}
const getChoiceD = () => {if (choiceD == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
    nextQuestion();}
else {
    //console.log(rightAnswer);
    //console.log(randomNumber);
    loseGame();
}}

React.useEffect(mainFunction,[]);

    return(
        <div>
        <div className = "flex flex-col text-center items-center">Question Number: {usedNumbers.length}</div>
        <div className = "bg-gray-400 flex flex-col flex-center justify-center h-screen">
        <div className = "flex flex-col text-center items-center">
        <div className="p-20">
        <div className="text-4xl p-6 bg-yellow-700 text-black">{randomCountry}</div>
        </div>
    <div className="p-5">
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceA}
        >
          {choiceA}
        </button>
        </div>
        <div className="p-5">
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceB}
        >
          {choiceB}
    </button>
    </div>
    <div className="p-5">
        <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceC}
        >
          {choiceC}
        </button>
        </div>
        <div className="p-5">
    <button
          className="flex flex-center flex-justify-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getChoiceD}
        >
          {choiceD}
        </button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Questions;