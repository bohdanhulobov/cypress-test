/// <reference types="cypress" />
import { urls } from "../../utils/page-urls";

class Datepicker {
  get pickerButton() {
    return cy.get("input[placeholder]");
  }

  get todayDayButton() {
    return cy.get("nb-calendar-day-cell.day-cell.today");
  }

  openDatepickerPage() {
    cy.visit(urls.datepicker);
  }
}
export default new Datepicker();
