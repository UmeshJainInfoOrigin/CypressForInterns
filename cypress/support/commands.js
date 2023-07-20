// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const getValueForKey = (key, jsonObject) => {
    if (!jsonObject || typeof jsonObject !== "object") {
      return undefined;
    }
  
    const keys = Object.keys(jsonObject);
    for(let i = 0; i < keys.length; i++) {
      if (keys[i] === key ) {
        return jsonObject[key];
       //return jsonObject[key as keyof typeof obj]
      }
      
      const value = getValueForKey(key, jsonObject[keys[i]]);
      if (value) {
        return value;
      }
    }
    return undefined;
  }

Cypress.Commands.add('connectToMySql', (sqlquery)=>{
    cy.task("queryDb",sqlquery)
    console.log('Query Executed Successfully')
})

/**
 * @description This function will login to API using credentials provided
 * @param user credential having userid and pwd
 * @author InfoOrigin
 * @CreatedOn Apr 2023
 * @returns Authorised Token
 */
Cypress.Commands.add("LoginWebToken",(webPortalURL, userCredentials, tokenKeyName)=> {
    cy.request({
        url: webPortalURL,
        headers: { 
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: userCredentials
    }).then( response => {
        expect(response.status).to.eq(200)
        const token = getValueForKey(tokenKeyName, response)
        Cypress.env('token',token);
        cy.wrap(token).as('authToken')
    })

})


