const { describe } = require("mocha")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('eq', 'OrangeHRM')
  })
})

cy.get()