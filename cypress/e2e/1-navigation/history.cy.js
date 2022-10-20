describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should work navigation', () => {
    cy.get('a')
      .contains('Home')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
    cy.get('a')
      .contains('Settings')
      .click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/settings')
    })
  })
})
