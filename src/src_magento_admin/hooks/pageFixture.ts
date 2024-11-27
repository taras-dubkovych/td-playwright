import { Page } from '@playwright/test';
//Magento page objects
import { AdminLoginPage } from '../pages/magento_admin/AdminLoginPage';

//Seller page objects
import { DashboardPage } from '../pages/seller_dashboard/DashboardPage';
import { SellerLoginPage } from '../pages/seller_dashboard/SellerLoginPage';
import { SellerRegistrationPage } from '../pages/seller_dashboard/SellerRegistrationPage';

export class PageFixture {
  page!: Page;
  adminLoginPage!: AdminLoginPage;
  dashboardPage!: DashboardPage;
  sellerLoginPage!: SellerLoginPage;
  sellerRegistrationPage!: SellerRegistrationPage;

  async init(page: Page) {
    this.page = page;
    this.adminLoginPage = new AdminLoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.sellerLoginPage = new SellerLoginPage(page);
    this.sellerRegistrationPage = new SellerRegistrationPage(page);
  }

  updateDependencies() {
    this.adminLoginPage = new AdminLoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.sellerLoginPage = new SellerLoginPage(this.page);
    this.sellerRegistrationPage = new SellerRegistrationPage(this.page);
}
}

export const pageFixture = new PageFixture();
