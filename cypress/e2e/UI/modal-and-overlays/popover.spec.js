/// <reference types="cypress" />

const popoverText = "Hello, how are you today?";

describe("Popover page tests", () => {
  it("The 'Right' button should have a 'Hello, how are you today?' popover", () => {
    cy.visit("/pages/modal-overlays/popover");

    cy.contains("Right").trigger("mouseenter");
    cy.contains(".primitive-overlay", popoverText).should("be.visible");
  });
});
