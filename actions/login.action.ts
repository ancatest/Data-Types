import { Page , BrowserContext,expect} from "@playwright/test";
import LoginPage from "../pages/login.page";
import BaseAction from "./base.action";
import  Credentials from "../resources/test-data.json" with { type: "json" };

export default class LoginActions extends BaseAction{
    login:LoginPage

    constructor(page:Page,context:BrowserContext){
        super(page,context);
        this.login=new LoginPage(page,context)
    }

    async fillEmail(){
        const emailinput=this.login.emailInputField;
        await emailinput.fill(Credentials.accountDetails.username_default);
        expect(emailinput).not.toBe('');
    }

        async fillPassword() {
            await this.login.passwordInputField.fill(Credentials.accountDetails.password_default);
                }
     
        async pressSubmitButton() {
            await this.login.loginButton.click();
                }
     
        async completeForm() {
            await this.fillEmail();
            await this.fillPassword();
            await this.pressSubmitButton();
    }
    
}