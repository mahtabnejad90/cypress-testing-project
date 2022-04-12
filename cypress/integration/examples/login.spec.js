describe('Login input tests part 1', () => {

    
    it('should render the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.url().should('include', 'login.html')
        cy.log('Website rendered')
    })

    //delay will slow down the tests
    it('should fill in the username textfield', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Invalid username', {delay: 100})
    })

    it('should fill in the password textfield', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Invalid password', {delay: 100})
    })

    it('should select the keep me signed in checkbox', () => {
        cy.get('[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit the login form', () => {
       cy.contains('Sign in').click()
    })

    it('should display login error message', () => {
        cy.get('.alert-error').should('be.visible')
        cy.get('.alert-error').contains('Login and/or password are wrong.')
    })
})

describe('Login input tests part 2', () => {

    
    it('should render the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.url().should('include', 'login.html')
        cy.log('Website rendered')
    })

    //delay will slow down the tests
    it('should fill in the username textfield', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Invalid username', {delay: 100})
    })

    it('should fill in the password textfield', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Invalid password', {delay: 100})
    })

    it('should select the keep me signed in checkbox', () => {
        cy.get('[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit the login form', () => {
       cy.contains('Sign in').click()
    })

    it('should display login error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    })
})