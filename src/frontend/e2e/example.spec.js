// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('counter increments', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const counter = page.getByText(/Counter:\s*\d+/);

  await expect(counter).toBeVisible();

  const text = await counter.innerText();
  const match = text.match(/\d+/);

  if (!match) {
    throw new Error(`No counter number found in text: ${text}`);
  }

  const before = Number(match[0]);

  await page.getByRole('button', { name: 'Increment' }).click();

  await expect(page.getByText(`Counter: ${before + 1}`)).toBeVisible();
});