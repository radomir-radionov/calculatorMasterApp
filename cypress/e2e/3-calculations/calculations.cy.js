describe('Calculations', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should calculate the expression with two simple numbers', () => {
    cy.calculateTwoDigits('+', '12', false)
    cy.calculateTwoDigits('-', '6', false)
    cy.calculateTwoDigits('*', '27', false)
    cy.calculateTwoDigits('/', '3', false)
    cy.calculateTwoDigits('%', '0', false)
  })

  it('should calculate the expression with two negative numbers', () => {
    cy.calculateTwoDigits('+', '-12', true)
    cy.calculateTwoDigits('-', '-6', true)
    cy.calculateTwoDigits('*', '27', true)
    cy.calculateTwoDigits('/', '3', true)
    cy.calculateTwoDigits('%', '0', true)
  })

  it('should calculate difficult expression with closed brackets', () => {
    cy.calculateDifficultExpression()
    cy.get("[data-test-id='display-value']").should(
      'have.text',
      '-182.685',
    )
  })
})
