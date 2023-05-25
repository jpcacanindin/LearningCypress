describe ('Handling frames', () => {
    it ('Approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        //iframe capture
       let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type('Welcome {ctrl+a}' )

        cy.get('[aria-label="Bold"]').click()
    })

    it ('Approach 2 - Custom command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}' )

        cy.get('[aria-label="Bold"]').click()
    })
})