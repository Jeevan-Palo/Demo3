import 'cypress-file-upload'

Cypress.Commands.add("googleSearch", () => {
    cy.get('input[type="text"]').type('The Test Tribe')
    cy.get('input[type="submit"]').contains('Google Search').click()
}) 