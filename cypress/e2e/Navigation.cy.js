describe ('Navigation', () => {
    it ('Navigate', () => {
        cy.go('back')
        cy.go('forward')
        cy.go('-1')
        cy.go('1')
        cy.reload()
    })
})