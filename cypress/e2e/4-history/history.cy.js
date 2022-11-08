describe('History', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should add history after calculation', () => {
    const times = 5
    cy.addHistory(times)
    cy.get('[data-test-id=history]')
      .children('ul')
      .children('li')
      .should('have.length', times)
  })
})
