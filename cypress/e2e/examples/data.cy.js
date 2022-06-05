describe('Write/Read data from and to JSON/Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name:"Mahtab", age: 31})
    })

    it('should write data into Text file', () => {
        cy.writeFile('log.txt', "Mahtab Bahman Nejad")
    })
 })