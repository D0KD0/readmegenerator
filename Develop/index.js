// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name for github?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for github?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is a name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project'
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPLv3',
            'IBM',
            'AGPL',
            'No license'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any dependencies to be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Something user should know?'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Add screenshot location ex) ./assets/screenshot.png'
    },
    {
        type: 'input',
        name: 'lessonLearned',
        message: 'Any lesson learned?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who take(s) the credit of this project?'
    }

];

// TODO: Create a function to write README file
inquirer
    .prompt(questions)
    .then((response) => fs.appendFile('README.md', writeToFile(response), (err) => err ? console.err(err) : console.log('ReadMe is successfully created!')));

const writeToFile = (data) => generateMarkdown(data);
