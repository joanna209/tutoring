// documentation: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
import { FRONTEND_URL } from "../support/constants";

beforeEach(() => window.cy.visit(`${FRONTEND_URL}`))

describe('user happy path', () => {
  it('should visit home pages successfully', () => {
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/`)
  })

  it('should visit dashboard succesfully', () => {
    window.cy.login();
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/dashboard`)

  })

  it('should visit post details successfully', () => {
    window.cy.login();
    window.cy.get('button[name=view-btn]')
      .click()
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/post/1`)
  })

  it('should visit dashboard successfully', () => {
    window.cy.login();
    window.cy.get('button[name=view-btn]')
      .click()
    window.cy.get('button[name=back-btn]')
      .click()
    window.cy.url().should('deep.equal', `${FRONTEND_URL}/dashboard`)
  })
})