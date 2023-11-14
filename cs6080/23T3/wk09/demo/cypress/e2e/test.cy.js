// documentation: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
const FRONTEND_URL = "http://localhost:3000";

beforeEach(() => window.cy.visit(`${FRONTEND_URL}`))

describe('user happy path', () => {
  it('should visit home pages successfully', () => {
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/`)
  })

  it('should visit dashboard succesfully', () => {
    window.cy.get('input[name=email]')
      .focus()
      .type('a@a.com')
    window.cy.get('input[name=password]')
      .focus()
      .type('a')
    window.cy.get('button[name=login-btn]')
      .click()
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/dashboard`)
  })
})