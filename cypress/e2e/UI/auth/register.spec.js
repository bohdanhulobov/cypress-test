/// <reference types="cypress" />

import registerPage from "../../../pages/auth/Register.page";
import headerComponent from "../../../pages/components/header.component";
import { urls } from "../../../utils/page-urls";

const invalidData = "123";
const username = "John Smith";
const email = "j.smith@email.com";
const password = "qwerty1234";

describe("Register page tests", () => {
  beforeEach(() => registerPage.openRegisterPage());

  it("Input field validation", () => {
    registerPage.fullNameInput.type(invalidData);
    registerPage.emailInput.type(invalidData);
    registerPage.passwordInput.type(invalidData);
    registerPage.repeatPasswordInput.click();

    registerPage.title.click();

    registerPage.validationError.should(
      "contain",
      "Full name should contains from 4 to 50 characters"
    );
    registerPage.validationError.should(
      "contain",
      "Email should be the real one!"
    );
    registerPage.validationError.should(
      "contain",
      "Password should contain from 4 to 50 characters"
    );
    registerPage.validationError.should(
      "contain",
      "Password confirmation is required!"
    );
  });
  it("The user should be able to register with valid data", () => {
    registerPage.doRegistration(username, email, password);

    headerComponent.userAvatar.should("be.visible");
    cy.url().should("include", urls.home);
  });
});
