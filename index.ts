#! /urs/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generater number and show result

const randomNumber= Math.floor(Math.random() * 7 + 1);

const number= await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "guess number between 1-7"
    }
]);

if(number.userGuessNumber===randomNumber){
    console.log("congruntulation you guess right number");
}else{
    console.log("you guess wrong number");
};