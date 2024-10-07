# uec-cm-prototype

Repository to hold prototype of new capacity management user interface.

## Table of Contents

- [uec cm](#uec-cm-prototype)
  - [About](#about-the-uec-cm-prototype-repository)
  - [Installation](#installation)
  - [Running the project](#running-the-project)
  - [Building the project](#building-the-project)
  - [Incrementing the build number](#incrementing-the-build-number)
  - [Usage](#usage)
  - [Licence](#license)

## About the uec-cm-prototype repository

The repository contains code needed to run the capacity management user interface. It was previously held in the uec-cm repository, leveraging existing react set-up before moving to this separate repository.

The UI screens in this repository are designed by the UX team and developed so users can interact with the screens and journey flows during UR sessions.

The code is exploratory and has not been tested.

## Installation

- Setup git locally on your machine and configure the git user email and name.
- Setup gpg commit signing, which is required for commits to be 'verified'. Guidance on confluence
- Run the pre-commit hooks located in the 'scripts' folder
- Install an appropriate IDE compatible with Typescript
- Install Node and NPM
- Install and setup Docker
- Clone the repository

## Running the project

```shell
npm install
npm start
```

Runs the app and is viewable at `http://localhost:3000` in the browser.

## Building the project

`npm run build`

Builds the app for production to the `build` folder and bundles React in production mode.
The build is minified and the filenames include the hashes and can be deployed.

### Incrementing the build number

`npm run prebuild`
Auto increment build number and sets build date to today

## Usage

### Journey flows

Due to the different journey flows, entering different user information in the login screen will result in different flows

**User flow**:

Any username besides 'admin' can be entered to see the standard journey flow

**Admin flow**:

Only the 'admin' username will show the admin journey flow

### Hospital Units

Certain hospitals in the mock data have separate units. This is shown 'My Services' page. When these hospitals are selected in the 'My locations' page the user will be directed to the 'My Services' page. Selecting a unit will show the 'Update questionnaire' page.

- Central Middlesex Hospital - London
- Chesterfield Royal Hospital - Chesterfield
- Cromwell Hospital – South Kensington (independent)
- Derbyshire Royal Infirmary - Derby
- Florence Nightingale Community Hospital - Derby
- Gloucestershire Royal Hospital - Gloucester
- Leicester Royal Infirmary - Leicester

## License

[License](LICENSE)
