describe ('Capture videos and screenshots', () => {
    it ('Screenshot', () => {
        cy.visit('https://demo.opencart.com')
        cy.screenshot('homepage')
        cy.wait(5000)
        cy.get('img[title="Your Store"]').screenshot('img')
    })

    it.only ('Video', () => {
        cy.visit('https://demo.opencart.com')
        cy.screenshot('homepage')
        cy.wait(5000)
        cy.get('img[title="Your Store"]').screenshot('img')
        cy.get(':nth-child(7) > .nav-link').should('have.text','hotdog')
    })
})