import { Given, When, Then, afterScreenshotHandler } from "@badeball/cypress-cucumber-preprocessor";

  Given("Actor visit site", ()=> {
    cy.visit('https://example.cypress.io')
    

    cy.connectToMySql('SELECT * FROM application').then(count => {
        expect(count).to.have.lengthOf(8);
      });
      cy.log('after my command')
    
    cy.task("queryDb",`SELECT * FROM application`).then((abc) => {
        cy.log(abc)
        expect(abc).to.have.lengthOf(8);
      });

      cy.task('queryDb', `delete from client WHERE ClientID in ("C4", "C5")`).then((result) => {
        expect(result.changedRows).to.greaterThan(-1)
    })

      cy.task('queryDb', `INSERT INTO client (ClientID, ClientName, Description, CreatedBy) VALUES
      ("C4", "John", "QA Lead", "InfoOrigin"),
      ("C5", "Smith", "Product Owner", "InfoOrigin");`).then((result) => {
              expect(result.affectedRows).to.equal(2)
    })

    cy.task('queryDb', `UPDATE client SET ClientName = "Smith" WHERE ClientID="C1"`).then((result) => {
        expect(result.changedRows).to.equal(1)
    })

  })