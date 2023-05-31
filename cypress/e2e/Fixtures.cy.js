describe ('Fixtures', () => {
    // it ('Fixture Test 1', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')

    //     cy.fixture('example.json').then((data) => {

       

    //         cy.get('input[name="username"]').type(data.username)
    //         cy.get('input[name="password"]').type(data.password)
    //         cy.get('button[type="submit"]').click()
    //         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6').should('contain.text', 'Dashboard')
    //     })
    // })

    let userdata

    before (() => {
        cy.fixture('example').then((data) => {
            userdata = data
        })
    })

    it ('Import data using hooks', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').type(userdata.password)
        cy.get('button[type="submit"]').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6').should('contain.text', 'Dashboard')
    })
})       