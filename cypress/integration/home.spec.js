/// <refernce type="cypress"./>

context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should open the home page", () => {
    cy.get("h2").contains("End Of The Reel");
    cy.screenshot("Home");
  });
});
