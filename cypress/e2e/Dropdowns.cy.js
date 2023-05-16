describe ('Check dropdowns', () => {
    before('', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
    })

    it ('Selects country', () => {
        cy.get('#zcf_address_country').select('Afghanistan')
    })
})