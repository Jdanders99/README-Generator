// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License Badge](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-orange)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[For more information](https://choosealicense.com/licenses/mit/)`;
  } else if (license === 'Mozilla Public 2.0') {
    return `[For more information](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license === 'Apache 2.0') {
    return `[For more information](https://choosealicense.com/licenses/apache-2.0/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    The following readme uses a ${license} license:
    ${renderLicenseLink(license)}`;
  }
}

function renderLicenseContent(license) {
  if (licnse === 'None') {
    return '';
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;

  return `# ${data.title} 
${renderLicenseBadge(license)}
  
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Testing](#testing)
[Constribution](#contribution)
[Questions](#questions)
${renderLicenseContent(license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions
${data.question}
For any other questions, find me on Github: [${data.username}](https://github.com/${data.username})
or email me at [${data.email}](mailto:${data.email})

${renderLicenseSection(license)}`
};

module.exports = generateMarkdown;
