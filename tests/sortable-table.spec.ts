import { test, expect } from '@playwright/test';

test('TC-001, Checkbox is selected', async ({ page }) => {
    await page.goto('/laboratory/interactions');
    await page.locator(`//input[@aria-label="Вибрати Авторизація"]`).click();
    await expect(page.locator(`//span[@data-testid="interactions-selected-count"]`)).toContainText('1');
    await page.locator(`//input[@aria-label="Вибрати Завантаження файлу"]`).click();
    await expect(page.locator(`//span[@data-testid="interactions-selected-count"]`)).toContainText('2');
});

test('TC-002, Sorting is correct', async ({ page }) => {
    await page.goto('/laboratory/interactions');
    await page.locator('//button[@data-testid="interactions-sort-name"]').click();
    await expect(page.locator(`//tbody/tr[1]/td[2]`)).toHaveText('Створення статті');
    await page.locator('//button[@data-testid="interactions-sort-name"]').click();
    await expect(page.locator(`//tbody/tr[1]/td[2]`)).toHaveText('Авторизація');
});