/// <reference types="cypress" />

describe("Accordion page tests", () => {
  beforeEach(() => cy.visit("/pages/layout/accordion"));

  it("the 'Product Details' list item text should not be visible by default", () => {
    cy.get("nb-accordion-item").first().find(".item-body").should("be.hidden");
  });

  it("the 'Product Details' list item text should be visible after clicking the 'TOGGLE FIRST ITEM' button", () => {
    cy.get("button.appearance-filled").click();
    cy.get("nb-accordion-item").first().find(".item-body").should("be.visible");
  });
});
