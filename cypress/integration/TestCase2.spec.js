/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  }) 

describe('Musala Test', () => {

    it('TestCase2', {defaultCommandTimeout: 10000}, () => {
    
        //Visit website
        cy.visit('/')

        //Verify Company URL Loads
        cy.get('#menu-main-nav-1 > .menu-item-887 > .main-link').click({ force: true })
        cy.url().should('include', 'musala.com/company/')

        //Verify Leadership Section
        cy.get('#content > div.entry-content > section.company-members > div > h2')
          .contains('Leadership')

        //Redirect to Facebook Page  
        cy.get('[href="https://www.facebook.com/MusalaSoft?fref=ts"] > .musala').click()
    

    })

  

})
        