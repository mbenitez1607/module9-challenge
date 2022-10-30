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
    // Write Title to fileName
    fs.writeFile(fileName, `\# ${data.Title}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

    // Add license badge
    let lic;
    switch (data.License) {
        case "Apache License 2.0":
            lic = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
            break;
        case "GNU v3.0":
            lic = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
            break;
        case "MIT License":
            lic = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
            break;
        case "Eclipse Public License 2.0":
            lic = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)\n\n`
            break;
    }
    fs.appendFile(fileName, lic, (err) =>
        err ? console.error(err) : console.log('Success!'));

    // Append remaining sections to fileName

    fs.appendFile(fileName, `\#\# Description\n\n${data.Description}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    
    // Create Table of Contents
    fs.appendFile(fileName, `\#\# Table of Contents\n\n` +
        `- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n`
        + `- [License](#license)\n- [Contribute](#contribute)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));

        fs.appendFile(fileName, `\#\# Installation\n\n${data.Installation}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    fs.appendFile(fileName, `\#\# Usage\n\n${data.Usage}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    fs.appendFile(fileName, `\#\# License\n\n${data.License}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    fs.appendFile(fileName, `\#\# Contribute\n\n${data.Contribute}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    fs.appendFile(fileName, `\#\# Tests\n\n${data.Tests}\n\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
    fs.appendFile(fileName, `\#\# Questions\n\n` +
        `For bugs or RFEs, use the GitHub repo: ` +
        `https://github.com/${data.username}\n\n` +
        `Email your questions to: [${data.email}](mailto:${data.email})\n`, (err) =>
        err ? console.error(err) : console.log('Success!'));
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
                message: questions[4],
                choices: ["Apache License 2.0", "GNU v3.0", "MIT License", "Eclipse Public License 2.0"],
                name: 'License'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'Contribute'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'Tests'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[8],
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
