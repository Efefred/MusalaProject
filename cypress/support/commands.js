/// <reference types= "cypress" />

import 'cypress-file-upload'; 
  
//Custom Commands for TestCase3.spec.js & TestCase4.spec.js

  Cypress.Commands.add('getCareers', () => {  
    cy.get('#menu-main-nav-1 > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-478 > a')
      .contains('Careers').click({ force: true })
  })

  Cypress.Commands.add('verifyJoinUsPage', () => {
   cy.get('.link-wrapper > a > .contact-label', {timeout: 100000})
     .should('be.visible')
     .and('contain', 'Check our open positions').click()
     .url().should('include', ('/careers/join-us/'))
  })

  Cypress.Commands.add('verifyLocationAndPosition', () => {
   cy.get('#get_location', {timeout: 100000})
     //.select('Anywhere') 
     .select(3).should('have.value', 'Anywhere')
   cy.get('#content > section > div.inner-wraper > article:nth-child(2) > div > a > div > div.front > h2')
     .and('contain', 'Experienced Automation QA Engineer').click() 
  })   

  Cypress.Commands.add('verifySections', () => {
    cy.get(':nth-child(1) > .pull-right > .content-title > h2')
      .and('contain', 'General description')
    cy.get(':nth-child(1) > .pull-left > .content-title > h2')
      .and('contain', 'Requirements')
    cy.get(':nth-child(2) > .pull-right > .content-title > h2')
      .and('contain', 'Responsibilities') 
    cy.get(':nth-child(2) > .pull-left > .content-title > h2')
      .and('contain', 'What we offer') 
   })   

  Cypress.Commands.add('verifyApplyButton', () => {
    cy.get('.fancybox > .wpcf7-form-control')
      .should('be.visible')
      .click()
  })  

  Cypress.Commands.add('checkOpenPositions', () => {
    cy.get('#content > div.entry-header > div > div.image-overlay > div > section > div > a > button', {timeout: 100000})
      .contains('Check our open positions').click()
            
   })

  // Cypress.Commands.add('filterPositionsBySofia', () => {
  //   cy.get('#get_location', {timeout: 100000}).select('')
  //     .and('contain', 'Check our open positions').click()
       



    
     
