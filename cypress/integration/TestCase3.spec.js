/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

import testData from '../fixtures/TC3.json'

describe('Musala Test', () => {

    it('TestCase3', () => {
        cy.visit('/')  
        //Fetch Custom Cypress Commands from ../support/commands.js
        cy.getCareers()  
        cy.verifyJoinUsPage()  
        cy.verifyLocationAndPosition() 
        cy.verifySections()
        cy.verifyApplyButton()

        //Loop Through the Array defined in ../TC3.json
        testData.forEach(item=>{
        cy.get('#cf-1').type(item.Name)
        cy.get('#cf-2').type(item.Email)
        cy.get('#cf-3').type(item.Mobile)
        cy.get('p > .wpcf7-form-control').click()
        cy.get('.close-form').click()

         //Assert that the error messages appear
        cy.get(item.Selector)
          .should('have.text',`${item.Expected_Error}`)
        cy.get('.close-form').click({ force: true });  

         //Clear the input fields
        cy.get('#cf-1').clear();
        cy.get('#cf-2').clear();
        cy.get('#cf-3').clear();

        })    

         //Upload CV and verify error message
        const filePath = './docs/cv.pdf';
        cy.get('#cf-4').attachFile(filePath);
        cy.get('#uploadtextfield')
          .should('have.value',"C:\\fakepath\\cv.pdf")
        cy.get('p > .wpcf7-form-control').click()
        cy.get('.close-form').click({ force: true })
        cy.get('#wpcf7-f880-o1 > form > p:nth-child(4) > span > span')
          .should('have.text', 'The field is required.')
      
        

    })

    
})          