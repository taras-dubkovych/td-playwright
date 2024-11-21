import { test } from '@playwright/test';
import { AdminLoginPage } from '../../src/pages/adminLoginPage';
import { config } from '../../src/utils/config';

test.describe('Admin Login Tests', () => {
  test('Should log in successfully', async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.navigateToLogin();
    await adminLoginPage.login(config.admin.username, config.admin.password);
    await page.waitForSelector('text=Dashboard');
  });
});
