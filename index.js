// dependencies
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generatemarkdown = require('./utils/generateMarkdown')
// questions for generation
const questions = [
    {
        type: 'Input',
        name: 'title',
        message: 'please name your Project',
    },
    {
        type: 'input',
        name: 'description',
        messsage:'Please describe your Project',

    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Please provide the reletive path link to any screenshots of the project',
    },
    {
        type: 'input',
        name: 'link',
        messgae: 'Please provide a URL if the deployed project',
    },
    {
        type: 'checkbox',
        name:'license',
        message:'Please check the liscense you would like to use',
        choices:['MIT','APACHE2.0', 'Boost1.0','MPL2.0','BSD2','BSD3','none'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please describe some features your project has',
    },
    {
        type:'input',
        name:'require',
        message:'List any dependencies here.',
    },
    {
        type:'input',
        name:'usage',
        message:'list any and all languages youve used in this project',
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Please type in your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please type in your email',
    },
    {
        type: 'input',
        name: 'name',
        Message: 'Please type in your name',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any and all contributors that helped on this work (use github usernames)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide a walkthrough of this project',
    },
]
// writes file
function writeToFile(fileName, Data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), Data)
}
// initializes app
function init() {
    inquirer.prompt(questions).then((Responses)=> {
        console.log('Creating Professional Readme.md FIle....');
        writeToFile('./dist/README.md', generatemarkdown({...Responses}))
    })
}
init()