// import { test } from '@playwright/test';
// import { AdminLoginPage } from '../../src/pages/adminLoginPage';
// import { CustomersPage } from '../../src/pages/customersPage';
// import { config } from '../../src/utils/config';

// test.describe('Customers Management', () => {
//   test.beforeEach(async ({ page }) => {
//     const loginPage = new AdminLoginPage(page);
//     await loginPage.navigateToLogin();
//     await loginPage.login(config.admin.username, config.admin.password);
//   });

//   test('Should create a new customer', async ({ page }) => {
//     const customersPage = new CustomersPage(page);
//     await customersPage.navigateToCustomers();
//     await customersPage.createCustomer({
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'johndoe@example.com',
//     });
//   });
// });
