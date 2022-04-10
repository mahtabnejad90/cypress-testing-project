/* const { describe } = require("mocha")

describe('My first cypress test', () => {
    it('True should be true', () => {
        expect(true).to.equal(true)
    })

    it('5 should be 5', () => {
        expect(5).to.equal(5)
    })
})

describe('Another dummy test', () => {
    it('False should be false', () => {
        expect(false).to.equal(false)
    })
    it('10 should be 10', () => {
        expect(10).to.equal(10)
    })
}) */

describe('browser actions', () => {
    it('should render correct URL', () => {
        cy.visit('http://example.com', {timeout: 10000})
    })

    it('should check correct URL', () => {
        cy.url().should('include', 'example.com')
    })

    it('should wait for 3 seconds', () => {
        //implicit waiting
        cy.wait(3000)
    })

    it('should pause the test execution', () => {
        //pauses test execution
        cy.pause()
    })

    it('should check for correct element on the page ', () => {
        cy.get('h1').should('be.visible')
    })
 })

