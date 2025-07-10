import { LoginPage } from "../pageobjects/login.page";

export class Helpers {
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  static async login(username: string, password: string): Promise<void> {
    await browser.url("https://the-internet.herokuapp.com/login");
    await LoginPage.inputUsername().setValue(username);
    await LoginPage.inputPassword().setValue(password);
    await LoginPage.submitButton().click();
  }
}
