var URL = 'http://localhost:9966'

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('My First Test', () => {
    it('Visits the page', () => {
        cy.visit(URL)

        cy.contains('.slideshow img')
    })
})