import axios from 'axios';
import React from "react";

var usedNumbers = [];

const Questions = (props) => {
const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let randomNumber = randint(0,250);
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
            randomNumber = randint(0,250); 
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
        setChoiceB(props.onCountryData[randint(0,250)].capital);
        setChoiceC(props.onCountryData[randint(0,250)].capital);
        setChoiceD(props.onCountryData[randint(0,250)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 1){
        //console.log("1 accessed");
        setChoiceB(props.onCountryData[randomNumber].capital);
        setChoiceA(props.onCountryData[randint(0,250)].capital);
        setChoiceC(props.onCountryData[randint(0,250)].capital);
        setChoiceD(props.onCountryData[randint(0,250)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 2){
        //console.log("2 accessed");
        setChoiceC(props.onCountryData[randomNumber].capital);
        setChoiceB(props.onCountryData[randint(0,250)].capital);
        setChoiceA(props.onCountryData[randint(0,250)].capital);
        setChoiceD(props.onCountryData[randint(0,250)].capital);
        //console.log(randomNumber);
    }
    if (whichChoice == 3){
        //console.log("3 accessed");
        setChoiceD(props.onCountryData[randomNumber].capital);
        setChoiceB(props.onCountryData[randint(0,250)].capital);
        setChoiceC(props.onCountryData[randint(0,250)].capital);
        setChoiceA(props.onCountryData[randint(0,250)].capital);
        //console.log(randomNumber);
    }
}

const [choiceA, setChoiceA] = React.useState('Choice A');
const [choiceB, setChoiceB] = React.useState('Choice B');
const [choiceC, setChoiceC] = React.useState('Choice C');
const [choiceD, setChoiceD] = React.useState('Choice D');
const getChoiceA = () => {if (choiceA == rightAnswer){
    console.log(rightAnswer);
    console.log(randomNumber);
    console.log('yay');
    nextQuestion();
}
else {
    console.log(rightAnswer);
    console.log(randomNumber);
    console.log('oh no')
    props.ononGameOver()
}}
const getChoiceB = () => {if (choiceB == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
    nextQuestion();}
else {
   //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('oh no')
    props.ononGameOver();
}}
const getChoiceC = () => {if (choiceC == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
    nextQuestion();}
else {
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('oh no')
    props.ononGameOver();
}}
const getChoiceD = () => {if (choiceD == rightAnswer){
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('yay')
    nextQuestion();}
else {
    //console.log(rightAnswer);
    //console.log(randomNumber);
    console.log('oh no')
    props.ononGameOver();
}}

React.useEffect(mainFunction,[]);

    return(
        <div>
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

export default Questions;