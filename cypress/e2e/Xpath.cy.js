const cypress = require("cypress")

describe ('Check xpath', () => {
    it ('test using xpath', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get("#search").type("T-Shirts")
        cy.get("[title='Search']").click()
        cy.xpath("//*[@id='maincontent']/div[1]/h1").contains("T-Shirts")
        cy.xpath("//*[@id='maincontent']/div[3]/div[1]/div[2]/div[2]/ol/li").should('have.length', 12)
        
    })
})