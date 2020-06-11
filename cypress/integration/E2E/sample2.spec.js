describe('Search a keyword in Google site', function(){

    beforeEach('', function(){
        cy.clearLocalStorage() ;
        cy.fixture("/user_input").as("admin");
        cy.visit('#')
    })

    it('Launch the Google Site', function(){
        
        cy.title().should('be.eq','Google')
    })

    it('Enter the keyword The Test Tribe in search text box', function(){
        cy.googleSearch()
    })
    
    
})
