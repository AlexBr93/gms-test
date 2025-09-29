describe('US-014-Recomendações Do Dia', () => {
  beforeEach(() => {
    cy.visit('/')
    })

    afterEach(() => {
    cy.screenshot()

    })

    it('Deve buscar um filme com sucesso', () => {
    cy.get('#recommendations-section').should('be.visible')
    cy.get('#recommendations > :nth-child(1) > img').should('be.visible')
    cy.get(':nth-child(2) > img').should('be.visible')
    cy.get(':nth-child(3) > img').should('be.visible')
    cy.get(':nth-child(4) > img').should('be.visible')
    cy.get('#recommendations > :nth-child(5) > img').should('be.visible')
    

   })
 })

