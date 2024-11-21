import { test } from '@playwright/test';
import { AdminLoginPage } from '../../src/pages/adminLoginPage';
import { ProductsPage } from '../../src/pages/productsPage';
import { config } from '../../src/utils/config';

test.describe('Products Management', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new AdminLoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(config.admin.username, config.admin.password);
  });

  test('Should create a new simple product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.navigateToProducts();
    await productsPage.createSimpleProduct({
      name: 'Test Product',
      sku: 'TEST123',
      price: '50.00',
    });
  });
});
