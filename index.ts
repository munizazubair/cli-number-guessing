#! /usr/bin/env node

import inquirer from "inquirer"
//computer will generate a random number - done.

//user input for guessing number - done.

//compare user input with computer generated number and show result - done.


const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    }
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulatiopn! you guessed the right number.");
}else {
    console.log("you guessed the wrong number, try again!"); 
}