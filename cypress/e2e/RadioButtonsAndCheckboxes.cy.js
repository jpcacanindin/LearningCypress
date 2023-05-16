

describe ('Check UI Elements', () => {
    before ('Open site', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    })

    // it ('Checking Radio Buttons', () => {
    //     cy.get('input#male').should('be.visible').click()
    //     cy.get('input#male').should('be.checked')
    //     cy.get('input#female').should('not.be.checked')
    // })

    it ('Checking Checkbox Buttons', () => {
        // cy.get('input#monday').should('be.visible').check()
        // cy.get('input#monday').should('be.checked')
        // cy.get('.form-check-input[type="checkbox"]').should('be.visible').check()
    })

})
