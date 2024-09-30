import BasePage from "./base.page";

export default class RegistrationPage extends BasePage {
  get NameInputField() {
    return this.page.getByPlaceholder("Enter your name");
  }

  get emailInputField() {
    return this.page.getByPlaceholder("Enter valid email address");
  }

  get passwordInputField() {
    return this.page.getByPlaceholder("Enter your password");
  }

  get termscheckbox() {
    return this.page.getByText("I agree to the terms and");
  }
  get signupButton() {
    return this.page.getByRole("button", { name: "SIGN UP" });
  }
}
