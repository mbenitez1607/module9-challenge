// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is your project's title?", "Enter the project's description:",
"What are the installation instructions?", "Is there any usage information?", 
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
        fs.appendFile(fileName, `\#\# Contribute\n\n ${data.Contribute}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Tests\n\n ${data.Tests}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `\#\# Questions\n\nhttps://github.com/${data.username}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
        fs.appendFile(fileName, `[${data.email}](${data.email})\n\n`, (err) =>
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
            writeToFile("README",answers);
        })
}

// Function call to initialize app
init();
