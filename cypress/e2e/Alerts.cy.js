describe ('Alerts', () => {
        it ('Verifies alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onClick="jsAlert()"]').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('contain', 'You successfully clicked an alert')
    })

    it ('Verifies alert with confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onClick="jsConfirm()"]').click()
        
        cy.on('window:alert', (t) => {
            expect(t).to.contain('I am a JS Confirm')
        })

        cy.get('#result').should('contain', 'You clicked: Ok')

    })

    it ('Verifies alert with cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onClick="jsConfirm()"]').click()
        cy.on('window:confirm', () => false)
        cy.get('#result').should('contain', 'You clicked: Cancel')
    })

    it ('Verifies alert with input confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome')
            cy.get('button[onclick="jsPrompt()"]').click()
        })

        cy.get('#result').should('contain', 'You entered: welcome')
    })

    
    it.only ('Verifies alert with input cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome')
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.on('window:alert', () => false)
        })

        
        

        cy.get('#result').should('contain', 'You entered: null')
    })
})