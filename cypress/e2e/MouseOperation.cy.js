///<reference types="Cypress"/>
import 'cypress-iframe'


describe ('Mouse Operations', () => {
    it ('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/')

        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2)')
        .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2)')
        .should('be.visible')
    })

    it ('Right Click', () => {
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').trigger('contextmenu') //or use .rightclick()
        cy.get('.context-menu-icon-edit').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contain('clicked: edit')
        })
    })

    it ('Double Click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult') //Load the frame
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick') // or use .dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')
        
    })

    it ('Drag and Drop using Plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box2').drag('#box102',{force:true})
        cy.get('#box5').drag('#box105',{force:true})
        
    })

    it.only ('Scrolling Page', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(2) > tbody > :nth-child(42) > :nth-child(1) > img').scrollIntoView({duration:3000})
        cy.get(':nth-child(2) > tbody > :nth-child(42) > :nth-child(1) > img').should('be.visible')

    })
})