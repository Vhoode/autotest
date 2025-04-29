import { test, expect } from '@playwright/test';

test('200 с главной странцы', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
});
