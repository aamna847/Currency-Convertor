#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \tWelcome to 'CodeWithAAMNA'-Currency Convertor\n"));
//Define the list of currencies and their exchange rates.
let exchange_rate = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, //Japanese Currency (Yen)
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 277.70, //Pakistani Rupees.
};
//Prompt the user to select  currencies to convert from and to
let user_answer = await inquirer.prompt([
    //We are converting the currency from
    {
        name: "from_currency",
        type: "list",
        message: chalk.blue("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    //We are converting the currency to
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    //how much amount we are converting from and to.
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//Perform currency conversion by using this formula.
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of Conversion:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount.
//TO Fixed means that k ap agr koi amount point main h tu usko ap fixed krkay dikhado.
console.log(`Converted Amount = ${chalk.gray(converted_amount.toFixed(3))}`);
