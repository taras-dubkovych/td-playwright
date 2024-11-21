import { test } from '@playwright/test';
import { AdminLoginPage } from '../../src/src_magento_admin/pages/adminLoginPage';
import { ProductsPage } from '../../src/src_magento_admin/pages/productsPage';
import { LeftBarMenu } from '../../src/src_magento_admin/pages/leftBarMenu';
import { config } from '../../src/src_magento_admin/utils/config';

test.describe('Products Management', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new AdminLoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(config.admin.username, config.admin.password);
  });

  test('Should create a new simple product', async ({ page }) => {

    const leftBarMenu = new LeftBarMenu(page);
    const productsPage = new ProductsPage(page);

    await leftBarMenu.goToProducts();
    await productsPage.clickAddProductBtn();
    await productsPage.createSimpleProductOption();
    await productsPage.fillInRequiredFields({
      name: 'Test Product',
      sku: 'TEST123',
      price: '50.00',
    });
    await productsPage.clickSaveProductBtn();
    await productsPage.productHasBeenCreated();
  });
});
