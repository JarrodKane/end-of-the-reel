// <refernce types="cypress"/>

context("Using the mobile nav to navigate to all basic pages", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Check first page", () => {
    // Open the nav and go to the home page
    cy.get(".h-12 > svg").click();
    cy.get(".fixed > .h-full > :nth-child(1)").click();
    cy.url().should("include", "/");

    // Open nav and go to the Episodes page
    cy.get(".h-12 > svg").click();
    cy.get(".fixed > .h-full > :nth-child(2)").click();
    cy.url().should("include", "/episodes");

    // Open nav and go to the About page
    cy.get(".h-12 > svg").click();
    cy.get(".fixed > .h-full > :nth-child(3)").click();
    cy.url().should("include", "/about");

    // Open nav and go to the Contact page
    cy.get(".h-12 > svg").click();
    cy.get(".fixed > .h-full > :nth-child(4)").click();
    cy.url().should("include", "/contact");
  });
});
