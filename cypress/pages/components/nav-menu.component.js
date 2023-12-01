/// <reference types="cypress" />

class NavMenuComponent {
  get menuButton() {
    return cy.get(".menu-item");
  }

  clickByName(buttonName) {
    this.menuButton().contains(buttonName).click();
  }
}
export default new NavMenuComponent();
