describe('Upload file', function(){
         const fileName = 'Allpicturesblog.jpg';
         it('File Upload',function(){
        cy.visit("http://the-internet.herokuapp.com/")
        cy.contains('File Upload').click()
        cy.get('#file-upload').should('be.visible')

        
        cy.get('#file-upload').attachFile(fileName);
        cy.get('input[type="submit"]').click()
        cy.contains('File Uploaded!')
    })

    it('uploads the file via custom command', () => {
        cy.visit('https://angular-file-upload.appspot.com/')
        cy.get('[name=userName]').type('myLogo')
  
        const yourBestPicture = 'meow.png';
          
          cy.get('fieldset > .ng-pristine')
          .attachFile('Allpicturesblog.jpg');
    
        cy.contains('button', 'Submit').click()
    
        cy.contains('.progress', '100%')  
        cy.contains('body', 'Upload Successful')
      })
   
})