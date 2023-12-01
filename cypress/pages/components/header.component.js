/// <reference types="cypress" />

class HeaderComponent {
  get sidebarButton() {
    return cy.get("a.sidebar-toggle");
  }
  get themeDropdown() {
    return cy.get("button.select-button");
  }

  get searchButton() {
    return cy.get("button.start-search");
  }

  get emailButton() {
    return cy.get('nb-action[icon="email-outline"]');
  }

  get notificationsButton() {
    return cy.get('nb-action[icon="bell-outline"]');
  }

  get userAvatar() {
    return cy.get("div.user-picture.image");
  }

  get username() {
    return cy.get("div.user-name");
  }
}
export default new HeaderComponent();
