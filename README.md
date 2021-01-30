# Sample tests with WebDriverIO and Cucumber

This is a sample project

## Features

-   TypeScript
-   Page Object Pattern
-   Allure report (screenshots on failure) and Timeline report

## Requirements

-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
npm run report:open
```
