// Function to generate license badge
const generateLicenseBadge = license => 
    license !== 'none' ? `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)` : "";

// Function to generate license link
const generateLicenseLink = license => 
    license !== 'none' ? `\n* [license](#license)\n` : "";

// Function to generate license section
const generateLicenseSection = license => 
    license !== 'none' ? `## License\nlicensed under the ${license} license` : "";

// Function to generate markdown
const generateMarkdown = data => {
    const { title, name, license, features, require, usage, contributors, install, test, email, creator } = data;

    return `# ${title}
    by ${name}
    ${generateLicenseBadge(license)}
    ## Table of Contents 
    * [Features](#features)
    * [Languages & Dependencies](#languagesanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${features}
    ## Languages & Dependencies
    ${require}
    ## How to Use This Application:
    ${usage}
    ## Contributors
    ${contributors}
    ## Installation
    ${install}
    ## Testing
    ${test}
    ## Questions
    Please send your questions [here](mailto:${email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${creator}](https://github.com/${creator}).
    ${generateLicenseSection(license)}
    `;
}

module.exports = generateMarkdown;
