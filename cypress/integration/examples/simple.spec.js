describe('Dummy test part 1', () => {
    it('True should be true', () => {
        expect(true).to.equal(true)
    })

    it('5 should be 5', () => {
        expect(5).to.equal(5)
    })
})

describe('Dummy test part 2', () => {
    it('False should be false', () => {
        expect(false).to.equal(false)
    })
    it('10 should be 10', () => {
        expect(10).to.equal(10)
    })
})

 describe('Browser actions part 1', () => {
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

/*     it('should pause the test execution', () => {
        //pauses test execution
        cy.pause()
    }) */

    it('should check for correct element on the page ', () => {
        cy.get('h1').should('be.visible')
    }) 
 })

 describe('Browser actions part 2', () => {

    it('should render correct book website URL', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html')
    })

    it('should select the Travel category via click', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })
})