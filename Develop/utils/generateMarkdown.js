// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = [
    '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)', 
    '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    '![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)',
    '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)',
    '![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)',
    '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  ]

  if(license === 'MIT') {
    return licenseBadge[0];
  } else if (license === 'Apache 2.0') {
    return licenseBadge[1];
  } else if (license === 'GPLv3') {
    return licenseBadge[2];
  } else if (license === 'IBM') {
    return licenseBadge[3];
  } else if (license === 'AGPL') {
    return licenseBadgge[4];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = [
    'https://opensource.org/licenses/MIT',
    'https://opensource.org/licenses/Apache-2.0',
    'https://www.gnu.org/licenses/gpl-3.0',
    'https://www.gnu.org/licenses/agpl-3.0',
    'https://opensource.org/licenses/IPL-1.0',
    'https://opensource.org/licenses/MPL-2.0'
  ]

  if(license === 'MIT') {
    return licenseLink[0];
  } else if (license === 'Apache 2.0') {
    return licenseLink[1];
  } else if (license === 'GPLv3') {
    return licenseLink[2];
  } else if (license === 'IBM') {
    return licenseLink[3];
  } else if (license === 'AGPL') {
    return licenseLink[4];
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);

  if (link === '') {
    return `## License\n No license is applied for this git`
  } else {
    return `## License\n This git is licensed under the ${license}.\n ${link}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}\n

  ## Description

  ${data.description}\n

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot] (#screenshot)
  - [Lesson Learned] (#lesson learned)
  - [Credits](#credits)
  - [License](#license)
  \n

  ## Installation

  Needed dependencies for this project: ${data.installation} \n

  ## Usage
  ${data.usage} \n

  ## Screenshot
  <img src="${data.screenshot}" /> \n

  ## Lesson Learned
  ${data.lessonLearned} \n

  ## Credits
  ${data.credits} \n

  ## License
  ${badge}\n
  This project is lisenced under the ${data.license} \n
  Copyright (c) ${data.name}
  
  ## Contact
  If there are any questions/concerns, pleaese email ${data.email}

`;
}

module.exports = generateMarkdown;
