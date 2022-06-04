describe('keyboard press simulation', () => {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        //inputs some text the presses enter
        cy.get('#searchTerm').type('just some text {enter}')

        })
    })