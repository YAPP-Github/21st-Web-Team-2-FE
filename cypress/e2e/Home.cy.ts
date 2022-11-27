// cypress/integration/app.spec.js

describe('Home Page', () => {
  it('렌더링 테스트', () => {
    cy.visit('/');

    cy.get('h2').contains(/Hello Web2/i);
  });

  it('렌더링 테스트 - React-testing-library', () => {
    cy.visit('/');

    // cy.findByRole('heading').contains(/Hello Web2/i);
    cy.findByRole('heading').contains(/Hello Web2/i);
  });
});
