describe ('Data Driven Test', () => {

    it ('Multiple accounts', () => {

        cy.fixture('example').then((data) => {

            cy.visit('https://opensource-demo.orangehrmlive.com/')

            cy.wrap(data).each((item) => {
                cy.get('input[name="username"]').type(item.username)
                cy.get('input[name="password"]').type(item.password)
                cy.get('button[type="submit"]').click()
               
                if (item.username == 'Admin' && item.password == 'admin123') {
                    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6').should('contain.text', 'Dashboard')
                    cy.get('.oxd-userdropdown-tab').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                } else {
                    cy.get('.oxd-alert-content > .oxd-text').should('contain.text', 'Invalid credentials')
                }
            })
        })
            

    })

})