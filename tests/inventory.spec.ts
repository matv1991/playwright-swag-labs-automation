import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

// cart tests
test('user can add item to cart from product page', async ({ page }) => {
  // write these as comments first
  // then convert — you already know these locators
});

test('user can remove items from cart from product page', async ({ page }) => {
  // write these as comments first
});

// sorting tests
test('user can sort items in alphabetic order', async ({ page }) => {
  // GIVEN I am on the inventory page
  // WHEN I select 'Name (A to Z)' from the sort dropdown
  // THEN the displayed items are sorted alphabetically

  await page.locator('[data-test="product-sort-container"]').selectOption('az');
  const names = await page.locator('[data-test="inventory-item-name"]').allTextContents();
  const sorted = [...names].sort();
  expect(names).toEqual(sorted);
});

// leave these as empty shells for now — finish the ones above first
test('user can sort items in reverse alphabetic order', async ({ page }) => {});
test('user can sort items by ascending price', async ({ page }) => {});
test('user can sort items by descending price', async ({ page }) => {});
test('user can click on product name to visit product details page', async ({ page }) => {});