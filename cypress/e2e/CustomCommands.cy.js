describe ('Custom Commands', () => {
    it ('Clicking Links', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    it ('Login Command', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.Login('testing@gmail.com','test123')
    })
})