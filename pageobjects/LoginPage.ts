import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage {
  /**
   * define selectors using getter methods
   */
  static get inputUsername(): ChainablePromiseElement {
    return $("#username");
  }

  static get inputPassword(): ChainablePromiseElement {
    return $("#password");
  }

  static get submitButton(): ChainablePromiseElement {
    return $('button[type="submit"]');
  }

  static get successMessage(): ChainablePromiseElement {
    return $("//div[contains(text(), 'You logged into a secure area!')]");
  }
}
