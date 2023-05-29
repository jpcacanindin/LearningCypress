describe ('', () => {
    beforeEach ('Login', () => {
        cy.visit('demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()

        cy.get('.btn-close').click()

        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul > li:first-child').click()
        
    })

    it ('Check number of rows & columns', () => {
        cy.get('table[class="table table-bordered table-hover"] > tbody > tr').should('have.length', '10')
        cy.get('table[class="table table-bordered table-hover"] > thead > tr > td').should('have.length', '7')
    })

    it ('Check specific value', () => {
        cy.get('#form-customer > div.table-responsive > table > tbody > tr:nth-child(4) > td:nth-child(3)')
        .contains('gorankrezic90@gmail.com')
    })

    it ('Check all value in the first row', () => {

        cy.get('table[class="table table-bordered table-hover"] > tbody > tr')
        .each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols) => {
                    cy.log($col.text())
                })
            })
        })

    })

    it.only ('Pagination', () => {
        // let totalPages;

        // cy.get('.col-sm-6 text-end').then((e) => {
        //     let mytext = e.text()
        //     totalPages = mytext.substring(mytext.indexOf('(') + 1, mytext.indexOf("Pages") - 1)
        //     cy.log("Total number of pages in a table: " + totalPages)
        // })

        let totalPages = 10
        let counter = 12
        for(let p=1;p<=totalPages;p++)
        {
            if(p>=1 && p<3)
            {
                cy.log("Active page: "+p)
                cy.get('ul[class="pagination"] > li:nth-child('+p+')').click()
                cy.wait(3000)

                cy.get('table[class="table table-bordered table-hover"] > tbody > tr')
                .each(($row, index, $rows) =>{
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(3)').then((e) => {
                            cy.log(e.text())
                        })
                    })
                })
             } else if(p>=3)
            {
                
                cy.log("Active page: "+counter)
                cy.get('ul[class="pagination"] > li:nth-child('+counter+')').click()
                cy.wait(3000)

                cy.get('table[class="table table-bordered table-hover"] > tbody > tr')
                .each(($row, index, $rows) =>{
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(3)').then((e) => {
                            cy.log(e.text())
                        })
                    })
                })
            } 
                
        }
    })
})
