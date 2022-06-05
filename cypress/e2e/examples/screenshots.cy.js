describe('Screenshots', () => {
    it('should take a screenshot of the full page', () => {

        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})

        })

        it('should take a screenshot of the header', () => {

            cy.get('header').screenshot()
        
        })

        it('should take a screenshot of the populate button', () => {

            cy.get('#populate').screenshot()
        
        })

    })