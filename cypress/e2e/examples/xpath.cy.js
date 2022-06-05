describe('xpath example test', () => {

    before(function(){
        // runs before all tests are executed inside describe block
        // setup test data or test conext
        // seed or reset the database
        
        cy.visit('http://zero.webappsecurity.com/index.html')

    })

    // not recommended
    it('should click on element using xpath', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
        })

        it('should display login form', () => {
            cy.url().should('include', '/login.html')
            cy.xpath('//form').should('have.length',1)
            //cy.xpath('//input[@id="user_login"]').should('have.length', 1)

        })    
    })