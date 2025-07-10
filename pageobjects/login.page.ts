import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage {
  /**
   * define selectors using getter methods
   */
  static inputUsername(): ChainablePromiseElement {
    return $("#username");
  }

  static inputPassword(): ChainablePromiseElement {
    return $("#password");
  }

  static submitButton(): ChainablePromiseElement {
    return $('button[type="submit"]');
  }

  static successMessage(): ChainablePromiseElement {
    return $("//div[contains(text(), 'You logged into a secure area!')]");
  }
}
