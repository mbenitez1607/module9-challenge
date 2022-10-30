// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { argv } = require('process');

// TODO: Create an array of questions for user input
const questions = ["What is your project's title?", "Enter the project's description:",
"What are the installation instructions?", "Is there any usage information?", "What is the project's license?",
"What are the contribution guidelines?", "Are there any test instructions?",
"What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const sections = ["Title","Description","Installation","Usage","Contribute","Tests"];
    // README Title
    let section;
    // Write Title to fileName
    fs.writeFile(fileName, `\# ${data.Title} \n\n`, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    //for (let i=1; i < questions.length; i++){
        // Append sections to fileName
        fs.appendFile(fileName, `\#\# Description\n\n ${data.Description}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Table of Contents\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Installation\n\n ${data.Installation}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Usage\n\n ${data.Usage}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# License\n\n ${data.License}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Contribute\n\n ${data.Contribute}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Tests\n\n ${data.Tests}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Questions\n\nhttps://github.com/${data.username}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `[${data.email}](mailto:${data.email})\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    //}
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'Title'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'Description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'Installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'Usage'
            },
            {
                type: 'list',
                message: questions[3],
                name: 'License'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'Contribute'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'Tests'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email'
            },
        ])
        .then((answers) => {
            console.log(answers);
            // Verify if user ** BY CHANCE ** provided a file name to use
            if (!argv[2]) {
                writeToFile("README.md",answers);
            } else {
                writeToFile(argv[2],answers);
            }
        })
}

// Function call to initialize app
init();
