import { Page, BrowserContext, expect } from "@playwright/test";
import CalendarPage from "../pages/calendar.page";
import BaseAction from "./base.action";
import strings from "../resources/strings.json" with { type: "json" };

export default class CalendarActions extends BaseAction {
  calendar: CalendarPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.calendar = new CalendarPage(page, context);
  }
  async clickOnnextmonthdate() {
    // await this.calendar.calendarDate(date).click();

    const today = new Date();
    const currentDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate(),
    );
    const nextMonthDay = currentDate.getDate() + 1;

    console.log("next month day is: ", nextMonthDay);

    await this.page.locator(".datepicker-nav-next").first().click();
    const selectedmonth = currentDate.getMonth() + 1;
    console.log("selected month:", selectedmonth);
    await this.page
      .getByRole("button", { name: nextMonthDay.toString(), exact: true })
      .click();
    return `${selectedmonth}/${nextMonthDay}`;
  }
  async wheaderAsExpected(){
    await expect(this.calendar.wpageHeader(strings.workspacePage.wheaderTitle)).toBeVisible();
  }
  async clickoncalendarview(){
    await this.calendar.calendarview.click();
  }
  async cheaderAsExpected(){
    await expect(this.calendar.cpageHeader(strings.calendarPage.cheaderTitle)).toBeVisible();
  }
  async monthHeaderIsVisible(){
    await expect(this.calendar.monthHeader).toBeVisible();

  }


}
