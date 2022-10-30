// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is your project's title?", "Enter the project's description:",
"What are the installation instructions?", "Is there any usage information?", 
"What are the contribution guidelines?", "Are there any test instructions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests'
            },
        ])
        .then((answers) => console.log(answers))
}

// Function call to initialize app
init();
