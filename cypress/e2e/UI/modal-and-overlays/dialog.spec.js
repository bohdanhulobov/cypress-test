/// <reference types="cypress" />

describe("Dialog page tests", () => {
  it("The 'Right' button should have a 'Hello, how are you today?' popover", () => {
    const randomName = "Some random name";

    cy.visit("/pages/modal-overlays/dialog");

    cy.get("nb-card-body.result-from-dialog > button").click();
    cy.get("input[placeholder='Name']").type(randomName);
    cy.get("button[status='success']").click();

    cy.get("nb-card-body.result-from-dialog > ul > li").should(
      "have.text",
      randomName
    );
  });
});
