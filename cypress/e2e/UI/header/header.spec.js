/// <reference types="cypress" />
import { colors } from "../../../utils/theme-colors.js";

describe("Header tests", () => {
  it("Theme colors check", () => {
    cy.wrap(Object.keys(colors)).each((color) => {
      cy.visit("/");
      cy.get("button.select-button").click();
      cy.contains("nb-option", `${color}`)
        .invoke("text")
        .then((text) => {
          const trimmedText = text.trim();
          cy.wrap(trimmedText).should("eq", `${color}`);
        });
    });
  });
});
