/// <reference types="cypress" />

import DatepickerPage from "../../../pages/forms/Datepicker.page";
import moment from "moment";

describe("Datepicker page tests", () => {
  it("Common Datepicker today value verification", () => {
    DatepickerPage.openDatepickerPage();
    DatepickerPage.pickerButton.eq(0).click();

    DatepickerPage.todayDayButton.click();

    const currentDate = moment().format("ll");

    DatepickerPage.pickerButton.eq(0).should("have.prop", "value", currentDate);
  });
});
