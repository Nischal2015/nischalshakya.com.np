import { test, expect } from '@playwright/test';

test('meta is correct', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle('Nischal Shakya');
});

test('contains main heading', async ({ page }) => {
  const mainHeading = page.locator('h1');
  await page.goto('http://localhost:3000/');

  await expect(mainHeading).toHaveText('My Personal Portfolio site');
});
