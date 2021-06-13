// <refernce types="cypress"/>

context(
  "Check that on home load it loads a default episode from pinecast",
  () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("Check that most recent episode is automatically loaded", () => {
      cy.get("source")
        .should("have.attr", "src")
        .should("not.be.empty")
        .and("include", "pinecast.com");
    });
  }
);
