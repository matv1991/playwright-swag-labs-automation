import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addButton locator
  readonly removeButton locator
  readonly cartIcon locator
  readonly cartBadge locator

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('[data-test="username"]');
    this.removeButton = page.locator('[data-test="password"]');
    this.cartIcon = page.locator('[data-test="login-button"]');
    this.cartBadge = page.locator('[data-test="error"]');
  }

    async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async assertAddedToCart(message: string) {
    await 
}

  async assertRemovedFromCart(message: string) {
    await 
}