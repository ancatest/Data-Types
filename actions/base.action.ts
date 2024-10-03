import BasePage from "../pages/base.page";

export default class BaseAction extends BasePage {
  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
