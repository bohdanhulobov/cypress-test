/// <reference types="cypress" />

import headerComponent from "../../../pages/components/header.component";
import loginPage from "../../../pages/auth/Login.page";
import { improperEmails } from "../../../utils/email-validation";

describe("Login page tests", () => {
  it("Invalid emails validation (negative tests)", () => {
    cy.wrap(Object.values(improperEmails)).each((email) => {
      loginPage.openLoginPage();
      loginPage.emailInput.type(email);
      loginPage.title.click();
      loginPage.validationError.should(
        "contain",
        "Email should be the real one!"
      );
    });
  });
  it("Password should have more than 4 characters", () => {
    loginPage.openLoginPage();
    loginPage.passwordInput.type("123");
    loginPage.title.click();
    loginPage.validationError.should(
      "contain",
      "Password should contain from 4 to 50 characters"
    );
  });

  it("Email and password should be required", () => {
    loginPage.openLoginPage();
    loginPage.emailInput.click();
    loginPage.passwordInput.click();
    loginPage.title.click();

    loginPage.validationError.should("contain", "Email is required!");
    loginPage.validationError.should("contain", "Password is required!");
    loginPage.logInButton.should("be.disabled");
  });

  it("The user should be able to login", () => {
    loginPage.doLogin("some@email.com", "somep@ssword");

    headerComponent.userAvatar.should("be.visible");
  });
});
