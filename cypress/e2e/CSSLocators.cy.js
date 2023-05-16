describe ('CSSLocators', () => {
    it ('visit web page', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").type("T-Shirts")
        cy.get("[title='Search']").click()
        cy.xpath("//*[@id='maincontent']/div[1]/h1").contains("T-Shirts")
})

})
