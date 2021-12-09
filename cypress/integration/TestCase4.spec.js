/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

describe('Musala Test', () => {

    it('TestCase4', () => {

        cy.visit('/')
        cy.getCareers()
        cy.checkOpenPositions()

        cy.get('#content > section > div.inner-wraper > article')
          .find('a')
          .should($a =>{
              $a.filter(el=> ["Sofia","Skopje"].findIndex(item=>item === Cypress.$(el).find(".card-jobsHot__location").text()) ).map((i,el)=>{
                if(Cypress.$(el).find(".card-jobsHot__location").text() === "Sofia" || Cypress.$(el).find(".card-jobsHot__location").text() === "Skopje") console.log('URL',Cypress.$(el).attr('href'), "\n","Position",Cypress.$(el).find(".card-jobsHot__title").text(),"\n",  "Location",Cypress.$(el).find(".card-jobsHot__location").text())
              })
         } )

        //Get Form Fields

        //Assert that the error message, 'The e-mail address entered is invalid.’, is shown 
    }) 
})