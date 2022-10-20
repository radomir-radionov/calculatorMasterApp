describe('Keypad', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render keypad buttons', () => {
    const buttons = [
      'C',
      '7',
      '8',
      '9',
      '*',
      '-',
      '4',
      '5',
      '6',
      '/',
      '+',
      '1',
      '2',
      '3',
      '=',
      '.',
      '(',
      '0',
      ')',
      'CE',
      '%',
      '+/-',
    ]
    buttons.forEach(value =>
      cy
        .get(`[data-test-id='button-${value}']`)
        .should('have.text', value),
    )
  })
})
