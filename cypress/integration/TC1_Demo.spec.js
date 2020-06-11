describe('Search a keyword in Google site', function(){

    it('Launch the Google Site', function(){
        cy.visit('https://www.google.com/')
        cy.title().should('be.eq','Google')
    })

    it('Enter the keyword The Test Tribe in search text box', function(){
        cy.get('input[type="text"]').type('The Test Tribe')
    })
    
    it('click on Google Search button', function(){
        cy.get('input[type="submit"]').contains('Google Search').click()
    })
})