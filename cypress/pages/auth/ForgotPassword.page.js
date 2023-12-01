/// <reference types="cypress" />

import { urls } from "../../utils/page-urls";

class ForgotPasswordLink {
  get backButton() {
    return cy.get('a[aria-label="Back"]');
  }

  get title() {
    return cy.get("#title");
  }

  get emailInput() {
    return cy.get("#input-email");
  }
  get requestPasswordButton() {
    return cy.contains("button[status='primary']", "Request password");
  }

  get backToLogInButton() {
    return cy.get('a[routerlink="../login"]');
  }

  get registerLink() {
    return cy.get('a[routerlink="../register"]');
  }

  get validationError() {
    return cy.get("p.caption.status-danger");
  }

  openForgotPasswordPage() {
    cy.visit(urls.forgotPassword);
  }
}
export default new ForgotPasswordLink();
