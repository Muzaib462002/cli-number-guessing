#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - done
// 2) User input for guessing number - done
// 3) Compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you gussed right number.");
}
else {
    console.log("you gussed wrong number");
}
