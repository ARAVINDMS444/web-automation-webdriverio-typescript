import { ChainablePromiseElement } from "webdriverio";

export class Actions {
  /** Waits for a specified number of seconds */
  static async waitForSeconds(seconds: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  /** Waits for an element to be displayed */
  static async waitForElementToBeDisplayed(
    element: ChainablePromiseElement,
    timeout: number = 10000,
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
  }

  /** Waits for an element to be clickable */
  static async waitForElementToBeClickable(
    element: ChainablePromiseElement,
    timeout: number = 5000,
  ): Promise<void> {
    await element.waitForClickable({ timeout });
  }

  /** Scrolls to an element */
  static async scrollToElement(
    element: ChainablePromiseElement,
  ): Promise<void> {
    await element.scrollIntoView();
  }

  /** Clicks on an element */
  static async tapOnElement(element: ChainablePromiseElement): Promise<void> {
    await element.click();
  }

  /** Enters text into a field */
  static async enterText(
    element: ChainablePromiseElement,
    text: string,
  ): Promise<void> {
    await element.setValue(text);
  }

  /** Clears text from a field */
  static async clearText(element: ChainablePromiseElement): Promise<void> {
    await element.clearValue();
  }

  /** Gets the text of an element */
  static async getTextOfElement(
    element: ChainablePromiseElement,
  ): Promise<string> {
    return await element.getText();
  }

  /** Gets the value attribute of an element */
  static async getValueAttribute(
    element: ChainablePromiseElement,
  ): Promise<string> {
    return (await element.getAttribute("value")) as string;
  }

  /** Gets the name attribute of an element */
  static async getNameAttribute(
    element: ChainablePromiseElement,
  ): Promise<string> {
    return (await element.getAttribute("name")) as string;
  }

  /** Asserts an element is visible */
  static async assertElementIsVisible(
    element: ChainablePromiseElement,
    timeout: number = 10000,
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  }

  /** Asserts an element is hidden */
  static async assertElementIsHidden(
    element: ChainablePromiseElement,
    timeout: number = 10000,
  ): Promise<void> {
    await element.waitForDisplayed({ timeout, reverse: true });
    const isDisplayed: boolean = await element.isDisplayed();
    expect(isDisplayed).toBeFalsy();
  }

  /** Asserts exact text match */
  static assertTextStrictEqual(actualText: string, expectedText: string): void {
    expect(actualText).toStrictEqual(expectedText);
  }

  /** Verifies if actualText contains expectedText */
  static assertContains(actualText: string, expectedText: string): boolean {
    return actualText.includes(expectedText);
  }

  /** Checks if an element is displayed */
  static async isElementDisplayed(
    element: ChainablePromiseElement,
  ): Promise<void> {
    const isDisplayed: boolean = await element.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  }

  /** Performs multiple clicks on an element */
  static async tapMultipleTimesOnElement(
    element: ChainablePromiseElement,
    times: number = 1,
  ): Promise<void> {
    for (let i: number = 0; i < times; i++) {
      await element.click();
    }
  }

  /** Verifies if actual text contains expected text */
  static isTextDisplayed(actualText: string, expectedText: string): boolean {
    return actualText.includes(expectedText);
  }
}
