# cypress-testing-project

This repo is created as a practice and learning playground for cypress.io framework.

Learning resources:
[Automated Software Testing with Cypress on Udemy](https://www.udemy.com/course/automated-testing-with-cypress)

[Cypress.io Official Documentation](https://docs.cypress.io/)

Preqs & tools for project setup:

- VS Code IDE
- Node
- Cypress
- Chrome
- Prettier

Commands: 

### Initialising the project
1. `npm init`
2. `package name: cypress-testing-project`
3. `version: (1.0.0)`
4. `description: Automation testing project in Cypress.io`
5. `entry point: **LeaveEmpty**`
6. `git repository: https://github.com/mahtabnejad90/cypress-testing-project.git`
7. `keywords: testing, cypress, automation`
8. `author: Mahtab Nejad`
9. `license: ISC`
10. `Is this ok? (yes): yes`

### Cypress Commands

#### Opens Cypress Dashboard

`npm run cy:open`

#### Opens Cypress Tests in headless mode

`npm run cy:run`

**Note:** Cypress version 10+ has removed the run all spec from its GUI dashboard, therefore a temporary run command can be used to run all the tests from one spec file. When creating a new test file, ensure that it is also imported in the <cypress/e2e/examples/all.cy.js> file as well. The command to run all test in headless mode:

`npm run cy:run --spec ".\cypress\e2e\examples\all.cy.js`

to run the specs in visual mode, just open the cypress dashboard and run the <all.cy.js> file

