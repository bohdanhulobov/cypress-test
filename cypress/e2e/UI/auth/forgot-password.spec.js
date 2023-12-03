/// <reference types="cypress" />

import forgotPasswordPage from "../../../pages/auth/ForgotPassword.page";
import loginPage from "../../../pages/auth/Login.page";
import { improperEmails } from "../../../utils/email-validation";
import { urls } from "../../../utils/page-urls";

describe("Forgot Password page tests", () => {
  it("Improper emails validation (negative tests)", () => {
    cy.wrap(Object.values(emails)).each((email) => {
      forgotPasswordPage.openForgotPasswordPage();
      forgotPasswordPage.emailInput.type(email);
      forgotPasswordPage.title.click();

      forgotPasswordPage.validationError.should(
        "contain",
        "Email should be the real one!"
      );
      forgotPasswordPage.requestPasswordButton.should("be.disabled");
    });
  });

  it("the 'Back to Log In' button should brought to the 'Login' page", () => {
    forgotPasswordPage.openForgotPasswordPage();
    forgotPasswordPage.backToLogInButton.click();

    loginPage.title.should("contain.text", "Login");
    cy.url().should("include", urls.login);
  });

  it("the 'Register' button should brought to the 'Register' page", () => {
    forgotPasswordPage.openForgotPasswordPage();
    forgotPasswordPage.registerLink.click();

    loginPage.title.should("contain.text", "Register");
    cy.url().should("include", urls.register);
  });
});
