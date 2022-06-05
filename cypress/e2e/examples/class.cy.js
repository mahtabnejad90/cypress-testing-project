class BasePage{
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {

    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView() 
    }

}

describe('Abstractions with classes', () => {

    before(function(){
        // runs before all tests are executed inside describe block
        // setup test data or test conext
        // seed or reset the database
        
        HomePage.loadHomePage()

    })

    after(function(){
        // runs after all tests inside the describe block are done
        // beneficial for test cleanup
        // clean cookies or localstorage
    })

    beforeEach(function(){
        // runs before each it block within the describe block
    })

    afterEach(function(){
        // runs after each it block within the describe block
    })

    // can add it.skip to skip particular it block
    // can add .only to only run the test that has the .only parameter after the it declaration
    it.only('first IT block', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
     })
   
   
    it('second IT block', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
     })
 })