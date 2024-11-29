import { Page } from '@playwright/test';
import { Logger } from 'winston';
//Magento page objects
import { AdminLoginPage } from '../base/pages/magento_admin/AdminLoginPage';
import { MagentoDashboardPage } from '../base/pages/magento_admin/MagentoDashboardPage';
import { CreateProductPage } from '../base/pages/magento_admin/CreateProductPage';
import { ProductsGridPage } from '../base/pages/magento_admin/ProductsGridPage';
import { LeftBarMenu } from '../base/pages/magento_admin/LeftBarMenu';

//Seller page objects
import { SellerDashboardPage } from '../base/pages/seller_dashboard/SellerDashboardPage';
import { SellerLoginPage } from '../base/pages/seller_dashboard/SellerLoginPage';
import { SellerRegistrationPage } from '../base/pages/seller_dashboard/SellerRegistrationPage';


export class PageFixture {
  page!: Page;
  logger!: Logger;
  adminLoginPage!: AdminLoginPage;
  magentoDashboardPage!: MagentoDashboardPage;
  createProductPage!: CreateProductPage;
  productsGridPage!: ProductsGridPage;
  leftBarMenu!: LeftBarMenu;

  sellerDashboardPage!: SellerDashboardPage;
  sellerLoginPage!: SellerLoginPage;
  sellerRegistrationPage!: SellerRegistrationPage;

  async init(page: Page) {
    this.page = page;
    this.adminLoginPage = new AdminLoginPage(page);
    this.magentoDashboardPage = new MagentoDashboardPage(page);
    this.createProductPage = new CreateProductPage(page);
    this.productsGridPage = new ProductsGridPage(page);
    this.leftBarMenu = new LeftBarMenu(page);

    this.sellerDashboardPage = new SellerDashboardPage(page);
    this.sellerLoginPage = new SellerLoginPage(page);
    this.sellerRegistrationPage = new SellerRegistrationPage(page);
  }

  updateDependencies() {
    this.adminLoginPage = new AdminLoginPage(this.page);
    this.sellerDashboardPage = new SellerDashboardPage(this.page);
    this.magentoDashboardPage = new MagentoDashboardPage(this.page);
    this.createProductPage = new CreateProductPage(this.page);
    this.productsGridPage = new ProductsGridPage(this.page);
    this.leftBarMenu = new LeftBarMenu(this.page);

    this.sellerLoginPage = new SellerLoginPage(this.page);
    this.sellerRegistrationPage = new SellerRegistrationPage(this.page);
}
}

export const pageFixture = new PageFixture();
