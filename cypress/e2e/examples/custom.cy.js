describe('Custom Commands Scenario', () => {
    it('should login to web app via custom cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username','password')
        })
    })