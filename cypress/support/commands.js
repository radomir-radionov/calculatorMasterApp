/// <reference types="cypress" />

Cypress.Commands.add(
  'calculateTwoDigits',
  (sign, answer, negative) => {
    cy.get("[data-test-id='button-9']").click()
    if (negative)
      cy.get("[data-test-id='button-+/-']").click()
    cy.get(`[data-test-id='button-${sign}']`).click()
    cy.get("[data-test-id='button-3']").click()
    if (negative)
      cy.get("[data-test-id='button-+/-']").click()
    cy.get("[data-test-id='button-=']").click()
    cy.get('[data-test-id=display-value]').should(
      'have.text',
      answer,
    )
  },
)

Cypress.Commands.add('calculateDifficultExpression', () => {
  cy.get("[data-test-id='button-4']").click()
  cy.get("[data-test-id='button-+/-']").click()
  cy.get("[data-test-id='button-.']").click()
  cy.get("[data-test-id='button-1']").click()
  cy.get("[data-test-id='button-2']").click()
  cy.get("[data-test-id='button-5']").click()
  cy.get("[data-test-id='button-+']").click()
  cy.get("[data-test-id='button-(']").click()
  cy.get("[data-test-id='button-(']").click()
  cy.get("[data-test-id='button-3']").click()
  cy.get("[data-test-id='button-+/-']").click()
  cy.get("[data-test-id='button-+']").click()
  cy.get("[data-test-id='button-1']").click()
  cy.get("[data-test-id='button-)']").click()
  cy.get("[data-test-id='button-*']").click()
  cy.get("[data-test-id='button-3']").click()
  cy.get("[data-test-id='button-.']").click()
  cy.get("[data-test-id='button-7']").click()
  cy.get("[data-test-id='button-2']").click()
  cy.get("[data-test-id='button-)']").click()
  cy.get("[data-test-id='button-*']").click()
  cy.get("[data-test-id='button-2']").click()
  cy.get("[data-test-id='button-4']").click()
  cy.get("[data-test-id='button-=']").click()
})

Cypress.Commands.add(
  'calculateFractionalDigits',
  (sign, answer) => {
    cy.get("[data-test-id='button-9']").click()
    cy.get("[data-test-id='button-.']").click()
    cy.get("[data-test-id='button-9']")
      .click()
      .click()
      .click()
    cy.get(`[data-test-id='button-${sign}']`).click()
    cy.get("[data-test-id='button-3']").click()
    cy.get("[data-test-id='button-.']").click()
    cy.get("[data-test-id='button-3']")
      .click()
      .click()
      .click()
    cy.get("[data-test-id='button-=']").click()
    cy.get('[data-test-id=display-value]').should(
      'have.text',
      answer,
    )
  },
)

Cypress.Commands.add('addHistory', times => {
  for (let i = 0; i < times; i++)
    cy.calculateDifficultExpression()
})

Cypress.Commands.add('getInfinityResult', () => {
  cy.get("[data-test-id='button-1']").click()
  cy.get("[data-test-id='button-/']").click()
  cy.get("[data-test-id='button-0']").click()
  cy.get("[data-test-id='button-=']").click()
})

Cypress.Commands.add('getNanResult', () => {
  cy.get("[data-test-id='button-0']").click()
  cy.get("[data-test-id='button-/']").click()
  cy.get("[data-test-id='button-0']").click()
  cy.get("[data-test-id='button-=']").click()
})
