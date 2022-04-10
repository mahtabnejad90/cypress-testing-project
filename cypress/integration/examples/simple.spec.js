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
})
