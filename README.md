# Tests with WebDriverIO and Cucumber

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/actions)

This is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Cucumber](https://cucumber.io/)

## Features

-   TypeScript
-   [Expect-webdriverio](https://github.com/webdriverio/expect-webdriverio)
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

## Spoken Languages

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that.

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

