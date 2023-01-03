// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your app?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'What license is your app using?',
        name: 'license',
        choices: ['MIT', 'Mozilla Public 2.0', 'Apache 2.0', 'None']
    },
    {
        type: 'editor',
        message: 'Enter a brief description of your app -',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Describe installation instructions -',
        name: 'installation',
    },
    {
        type: 'editor',
        message: 'Describe how to use the app -',
        name: 'usage',
    },
    {
        type: 'editor',
        message: 'Describe any tests performed on the app -',
        name: 'tests',
    },
    {
        type: 'editor',
        message: 'List any contributions to this app -',
        name: 'contributing',
    },
    {
        type: 'editor',
        message: 'For any questions the user may have, answer -',
        name: 'question'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
