/// <reference types="cypress" />
import { colors } from "../../../utils/theme-colors.js";

describe("Header tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Default theme should be Light", () => {
    cy.get("button.select-button")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        cy.wrap(trimmedText).should("eq", "Light");
      });
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      colors.Light
    );
  });

  it("Switching to Dark theme", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='dark']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        cy.wrap(trimmedText).should("eq", "Dark");
      });

    cy.get("nb-option[ng-reflect-value='dark']").click();
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      colors.Dark
    );
  });

  it("Switching to Cosmic theme", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='cosmic']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        cy.wrap(trimmedText).should("eq", "Cosmic");
      });

    cy.get("nb-option[ng-reflect-value='cosmic']").click();
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      colors.Cosmic
    );
  });

  it("Switching to Corporate theme", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='corporate']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        cy.wrap(trimmedText).should("eq", "Corporate");
      });

    cy.get("nb-option[ng-reflect-value='corporate']").click();
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      colors.Corporate
    );
  });

  it("Switching back to Light theme", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='default']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        cy.wrap(trimmedText).should("eq", "Light");
      });

    cy.get("nb-option[ng-reflect-value='default']").click();
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      colors.Light
    );
  });
});
