describe('Write/Read data from and to JSON/Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name:"Mahtab", age: 31})
    })

    it('should write data into Text file', () => {
        cy.writeFile('log.txt', "Mahtab Bahman Nejad")
    })

    it('should read data from JSON file', () => {
        cy.readFile('log.json')
        .its('age')
        .should('eq', 31)
    })

    it('should read data from Text file', () => {
        cy.readFile('log.txt')
          .should('eq', 'Mahtab Bahman Nejad')
    })
 })

