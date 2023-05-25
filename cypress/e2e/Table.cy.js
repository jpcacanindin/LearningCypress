describe ('', () => {
    beforeEach ('Login', () => {
        cy.viewport(1920, 1080)
        cy.visit('demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()

        cy.get('.btn-close').click()

        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul > li:first-child').click()
        
    })

    it ('', () => {

    })
})