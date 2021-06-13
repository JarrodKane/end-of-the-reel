/// <refernce types="cypress"/>

let txt;
context("Checking that an episode exists, and going to its page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Checking first episode link takes you to the first episode page", () => {
    cy.get(":nth-child(1) > .bg-white > .text-4xl > button")
      .then((titleLink) => {
        txt = titleLink.text().match(/\w+/g).join("-");
      })
      .click();

    cy.wait(2000);
    cy.screenshot("first-episode", { capture: "fullPage" });

    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain(txt);
    });

    // describe("Take picture", () => {
    //   cy.wait(2000);
    //   cy.screenshot("First-episode");
    // });
  });
});
