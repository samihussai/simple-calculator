#! /usr/bin/env node

// SHABANG 

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "Firstnumber" },
  { message: "Enter your second number", type: "number", name: "Secondnumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// condition statement
if (answer.operator === "Addition") {
  console.log(answer.Firstnumber + answer.Secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.Firstnumber - answer.Secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.Firstnumber * answer.Secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.Firstnumber / answer.Secondnumber);
} else {
  console.log("Plz Select valid Operator");
}

console.log("YOUR ANSWER");
