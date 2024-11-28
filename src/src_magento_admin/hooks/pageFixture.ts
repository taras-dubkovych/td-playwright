import { Page } from '@playwright/test';
//Magento page objects
import { AdminLoginPage } from '../base/pages/magento_admin/AdminLoginPage';
import { MagentoDashboardPage } from '../base/pages/magento_admin/MagentoDashboardPage';

//Seller page objects
import { SellerDashboardPage } from '../base/pages/seller_dashboard/SellerDashboardPage';
import { SellerLoginPage } from '../base/pages/seller_dashboard/SellerLoginPage';
import { SellerRegistrationPage } from '../base/pages/seller_dashboard/SellerRegistrationPage';

export class PageFixture {
  page!: Page;
  adminLoginPage!: AdminLoginPage;
  magentoDashboardPage!: MagentoDashboardPage;
  sellerDashboardPage!: SellerDashboardPage;
  sellerLoginPage!: SellerLoginPage;
  sellerRegistrationPage!: SellerRegistrationPage;

  async init(page: Page) {
    this.page = page;
    this.adminLoginPage = new AdminLoginPage(page);
    this.magentoDashboardPage = new MagentoDashboardPage(page);
    this.sellerDashboardPage = new SellerDashboardPage(page);
    this.sellerLoginPage = new SellerLoginPage(page);
    this.sellerRegistrationPage = new SellerRegistrationPage(page);
  }

  updateDependencies() {
    this.adminLoginPage = new AdminLoginPage(this.page);
    this.sellerDashboardPage = new SellerDashboardPage(this.page);
    this.magentoDashboardPage = new MagentoDashboardPage(this.page);
    this.sellerLoginPage = new SellerLoginPage(this.page);
    this.sellerRegistrationPage = new SellerRegistrationPage(this.page);
}
}

export const pageFixture = new PageFixture();
