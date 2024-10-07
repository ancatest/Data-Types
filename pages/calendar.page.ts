import BasePage from "./base.page";

export default class CalendarPage extends BasePage {
  get Date() {
    return this.page.getByRole("link", { name: "Date & Time" });
  }
  calendarDate(date: string) {
    const dateToString = date.toString();
    return this.page.getByRole("button", { name: dateToString, exact: true });
  }
  wpageHeader(headerTitle: string) {
    return this.page.getByRole("heading", {
      name: `${headerTitle}`,
    });
  }

  get calendarview() {
    return this.page.getByRole("link", { name: "Date & Time" });
  }
  cpageHeader(headerTitle: string) {
    return this.page.getByRole("heading", {
      name: `${headerTitle}`,
    });
  }
  get monthHeader() {
    return this.page.locator(".datepicker-nav").first();
  }
}
