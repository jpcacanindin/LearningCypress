// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/> // 
/// <reference types="cypress-xpath /"> //

Cypress.Commands.add('getIframe', (iframe) => {
        cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
})

require('@4tw/cypress-drag-drop')

//Creating custom commands
Cypress.Commands.add('clickLink', (label) => {
        cy.get('a').contains(label).click()
})

Cypress.Commands.add('Login', (username,password) => {
        cy.get('#Email').type(username)
        cy.get('#Password').type(password)
        cy.get('form > .buttons > .button-1').click()
})