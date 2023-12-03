/// <reference types="cypress" />

import { url } from "inspector";
import { urls } from "../../utils/page-urls";

class LoginPage {
  get backButton() {
    return cy.get('a[aria-label="Back"]');
  }

  get title() {
    return cy.get("#title");
  }

  get emailInput() {
    return cy.get("#input-email");
  }

  get passwordInput() {
    return cy.get("#input-password");
  }

  get forgotPasswordLink() {
    return cy.get('a[routerlink="../request-password"]');
  }

  get rememberMeCheckbox() {
    return cy.get("nb-checkbox[name='rememberMe'] span.custom-checkbox");
  }

  get logInButton() {
    return cy.contains("button[status='primary']", "Log In");
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

  get registerLink() {
    return cy.get('a[routerlink="../register"]');
  }

  get validationError() {
    return cy.get("p.caption.status-danger");
  }

  openLoginPage() {
    cy.visit(urls.login);
  }

  doLogin(email, password) {
    this.openLoginPage();
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.logInButton.click();
  }
}

export default new LoginPage();
