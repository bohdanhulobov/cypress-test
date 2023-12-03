/// <reference types="cypress" />

import { urls } from "../../utils/page-urls";

class RegisterPage {
  get backButton() {
    return cy.get('a[aria-label="Back"]');
  }

  get title() {
    return cy.get("#title");
  }

  get fullNameInput() {
    return cy.get("#input-name");
  }

  get emailInput() {
    return cy.get("#input-email");
  }

  get passwordInput() {
    return cy.get("#input-password");
  }
  get repeatPasswordInput() {
    return cy.get("#input-re-password");
  }

  get termsAndConditionsCheckbox() {
    return cy.get("input[type='checkbox']");
  }

  get registerButton() {
    return cy.contains("button[status='primary']", "Register");
  }

  get githubButton() {
    return cy.get("nb-icon[ng-reflect-icon='github']");
  }

  get facebookButton() {
    return cy.get("nb-icon[ng-reflect-icon='facebook']");
  }

  get twitterButton() {
    return cy.get("nb-icon[ng-reflect-icon='twitter']");
  }

  get logInButton() {
    return cy.get('a[routerlink="../login"]');
  }

  get validationError() {
    return cy.get("p.caption.status-danger");
  }

  openRegisterPage() {
    cy.visit(urls.register);
  }

  doRegistration(username, email, password) {
    this.fullNameInput.type(username);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.repeatPasswordInput.type(password);
    this.termsAndConditionsCheckbox.click({ force: true });
    this.registerButton.click();
  }
}

export default new RegisterPage();
