import Login from "../PageObjects/Login.js"
describe ('Login Test', () => {
    it ('Using POM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        const ln=new Login();

        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
    })
})