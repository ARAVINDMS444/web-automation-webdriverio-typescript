import { Helpers } from "../utils/Helpers";
import { Actions } from "../utils/Actions";
import { LoginPage } from "../pageobjects/login.page";

describe("Login Test", (): void => {
  it("should login with valid credentials", async (): Promise<void> => {
    await Helpers.login("tomsmith", "SuperSecretPassword!");
    await Actions.waitForElementToBeDisplayed(LoginPage.successMessage());
    await Actions.assertElementIsVisible(LoginPage.successMessage());
  });
});
