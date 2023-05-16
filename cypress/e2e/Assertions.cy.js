describe('Assertions demo', () => {

    // it ("Implicit Assertions", () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com')
    //     //should and 

    //     //types of assertions
    //     cy.url().should('include', 'opensource-demo.orangehrmlive.com')
    //     cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.url().should('contain', 'orangehrmlive')
        
    //     //should
    //     cy.url().should('include', 'opensource-demo.orangehrmlive.com')
    //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .should('contain', 'orangehrmlive')

    //     //and
    //     cy.url().should('include', 'opensource-demo.orangehrmlive.com')
    //     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .and('contain', 'orangehrmlive')
    //     .and('not.contain', 'greenhrm')

    //     //check if image exist 
    //     cy.get('.orangehrm-login-branding > img').should('be.visible')
    //     cy.get('.orangehrm-login-branding > img').should('exist')

    //     //find active links
    //     cy.xpath('//a').should('have.length', 5)

    //     //input values in a text field
    //     cy.get('[placeholder="Username"]').type('Admin')
    //     cy.get('[placeholder="Username"]').should('have.value', 'Admin')
    // })
    
    it ('Explicit Assertions', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com')

        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()
        
        let expName = 'Paul Collings';

        cy.get('.oxd-userdropdown-name').then(  (x)=>{
            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            // assert.notEqual(actName,expName)
        })
    })
})