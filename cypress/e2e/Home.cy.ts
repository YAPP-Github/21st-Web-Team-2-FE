// cypress/integration/app.spec.js

describe('Home Page', () => {
  it('렌더링 테스트', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it

    // The new page should contain an h1 with "About page"
    cy.get('h2').contains(/Hello Web2/i);
  });
});
