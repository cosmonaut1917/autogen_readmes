const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    { type: 'input', name: 'title', message: 'Please name your Project' },
    { type: 'input', name: 'description', message: 'Please describe your Project' },
    { type: 'input', name: 'screenshots', message: 'Please provide the relative path link to any screenshots of the project' },
    { type: 'input', name: 'link', message: 'Please provide a URL if the deployed project' },
    { type: 'checkbox', name: 'license', message: 'Please check the license you would like to use', choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'] },
    { type: 'input', name: 'features', message: 'Please describe some features your project has' },
    { type: 'input', name: 'require', message: 'List any dependencies here.' },
    { type: 'input', name: 'usage', message: 'List any and all languages you\'ve used in this project' },
    { type: 'input', name: 'creator', message: 'Please type in your GitHub username' },
    { type: 'input', name: 'email', message: 'Please type in your email' },
    { type: 'input', name: 'name', message: 'Please type in your name' },
    { type: 'input', name: 'contributors', message: 'Please list any and all contributors that helped on this work (use GitHub usernames)' },
    { type: 'input', name: 'test', message: 'Please provide a walkthrough of this project' },
];

const writeToFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

const init = () => {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating Professional Readme.md File....');
        writeToFile('./dist/README.md', generateMarkdown({ ...responses }));
    });
};

init();
