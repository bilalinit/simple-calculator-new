#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the following operators",
        type: "list",
        name: "operators",
        choices: ["addtion", "subtration", "multiply", "division"],
    },
]);
if (answer.operators === "addtion") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
