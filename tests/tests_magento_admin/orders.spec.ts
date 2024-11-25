// import { test } from '@playwright/test';
// import { AdminLoginPage } from '../../src/src_magento_admin/pages/adminLoginPage';
// import { OrdersPage } from '../../src/src_magento_admin/pages/ordersPage';
// import { config } from '../../src/src_magento_admin/utils/config';

// test.describe('Orders Management', () => {
//   test.beforeEach(async ({ page }) => {
//     const loginPage = new AdminLoginPage(page);
//     await loginPage.navigateToLogin();
//     await loginPage.login(config.admin.username, config.admin.password);
//   });

//   test('Should view and change order status', async ({ page }) => {
//     const ordersPage = new OrdersPage(page);
//     await ordersPage.navigateToOrders();
//     await ordersPage.changeOrderStatus('100000001', 'Complete');
//   });
// });
