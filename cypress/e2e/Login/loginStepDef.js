import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  Given("Actor visit site", ()=> {
    cy.visit('https://example.cypress.io')
  })