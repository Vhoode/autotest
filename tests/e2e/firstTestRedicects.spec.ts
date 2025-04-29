import { test, expect } from '@playwright/test';

test('Первый тест с редиректами', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Клиентам' }).first().click();
  await expect(
    page.getByRole('heading', { name: 'Первый в России маркетплейс на рынке беспилотной авиации' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Поставщикам' }).first().click();
  await expect(
    page.getByRole('heading', { name: 'Приглашаем к сотрудничеству поставщиков в сфере БАС' }),
  ).toBeVisible();
});
