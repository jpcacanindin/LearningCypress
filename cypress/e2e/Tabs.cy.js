describe ('Verify Tabs', () => {
    it ('Tab 1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('#content > div > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })

    it.only ('', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('#content > div > a').then((e) => {
            let url = e.prop('href')
            cy.visit(url)
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        })
    })
})

