import { test, expect } from '@playwright/test';

test('простой тест с редиректами', async ({ page, request }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'О проекте' }).first().click();
  await expect(page.getByRole('heading', { name: 'Налетай.рф' })).toBeVisible();
  await page.getByRole('link', { name: 'Клиентам' }).first().click();
  await expect(
    page.getByRole('heading', { name: 'Первый в России маркетплейс на рынке беспилотной авиации' }),
  ).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await expect(
    page.getByText('Оформление заказа доступно только зарегистрированным пользователям'),
  ).toBeVisible();
});
