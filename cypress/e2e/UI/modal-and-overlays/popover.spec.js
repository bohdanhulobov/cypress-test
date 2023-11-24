/// <reference types="cypress" />

describe("Popover page tests", () => {
  it("The 'Right' button should have a 'Hello, how are you today?' popover", () => {
    cy.visit("/pages/modal-overlays/popover");

    cy.contains("Right").trigger("mouseenter");
    cy.get(".primitive-overlay").should("be.visible");
  });
});
