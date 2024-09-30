import { Page, BrowserContext, expect } from "@playwright/test";
import BaseAction from "./base.action";
import RegistrationPage from "../pages/registration.page";
import Credentials from "../resources/test-data.json" with { type: "json" };

export default class RegisterActions extends BaseAction {
  registration: RegistrationPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.registration = new RegistrationPage(page, context);
  }

  async fillName() {
    await this.registration.NameInputField.fill(Credentials.FieldDetails.name);
    expect(this.fillName).not.toBe("");
  }

  async fillEmail() {
    //await this.registration.emailInputField.fill(Credential.accountDetails.email);
    //expect(this.fillEmail).not.toBe('');
    const timestamp = Date.now();
    const email = `antest+${timestamp}@gmail.com`;
    console.log("email is:", email);
    await this.registration.emailInputField.fill(email);
    expect(this.fillEmail).not.toBe("");
  }

  async fillPassword() {
    await this.registration.passwordInputField.fill(
      Credentials.accountDetails.password_default,
    );
    expect(this.fillPassword).not.toBe("");
  }

  async pressSIGNUPButton() {
    await this.registration.signupButton.click();
  }

  async completeForm() {
    await this.fillName();
    await this.fillEmail();
    await this.fillPassword();
    await this.pressSIGNUPButton();
  }
}
