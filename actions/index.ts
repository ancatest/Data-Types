import { BrowserContext, Page } from "playwright";
import BaseAction from "./base.action";
import LoginActions from "./login.action";
import RegisterActions from "./register.action";
import CalendarActions from "./calendar.action";

export default class App {
  base: BaseAction;
  login: LoginActions;
  registration: RegisterActions;
  calendar: CalendarActions;

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseAction(page, context);
    this.login = new LoginActions(page, context);
    this.registration = new RegisterActions(page, context);
    this.calendar = new CalendarActions(page, context);
  }
}
