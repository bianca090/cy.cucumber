import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Eu estou na pagina de login', ()=>{
    cy.visit('https://www.saucedemo.com/')
})

When('Eu valido meu email e senha', ()=>{
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})


Then('Eu tenho um login com sucesso', ()=>{
    cy.url().should('include', '/inventory')
})