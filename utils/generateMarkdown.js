// creates a function that returns a license badge based on choice
function renderLicenseBadge(license) {
    if (license !== 'none') {
        return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
    }
    return "";
}

// creates a function that returns a license link

function renderLicenseLink(liscense) {
    if (liscense !== 'none') {
        return `\n* [license](#license)\n`;
    }
    return "";
}
// creates a function that returns the license section of the readme
function renderLicenseSelection(license) {
    if (license !== 'none') {
        return `## License
        licensed under the ${license} license`
        
    }
    return "";
}
// generates the readme and should display it 
function generatemarkdown(Data) {
    return `# ${Data.title}
    by ${Data.name}
    ${renderLicenseBadge(Data.license)}
    ## Table of Contents 
    ## Table of Contents
    * [Features](#features)
    * [Languages & Dependencies](#languagesanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${Data.features}
    ## Languages & Dependencies
    ${Data.require}
    ## How to Use This Application:
    ${Data.usage}
    ## Contributors
    ${Data.contributors}
    ## Testing
    ${Data.test}
    ## Questions
    Please send your questions [here](mailto:${Data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${Data.creator}](https://github.com/${Data.creator}).
    ;
    }
${renderLicenseSelection(Data.license)}
`;
}
module.exports = generatemarkdown