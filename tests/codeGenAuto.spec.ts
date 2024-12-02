import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mcstaging.comave.com/admin_ni2d8miur/admin/');
  await page.getByPlaceholder('user name').fill('tarasd');
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('tesic2789___');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('tesic2789_____');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('Ntcsr2789___');
  await page.getByPlaceholder('password').click({
    button: 'right'
  });
  await page.getByPlaceholder('password').click({
    button: 'right'
  });
  await page.locator('section').click();
  await page.getByPlaceholder('user name').click();
  await page.getByPlaceholder('user name').fill('tarasd');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: ' Catalog' }).click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByLabel('Add product of type').click();
  await page.getByRole('button', { name: 'Add Product', exact: true }).click();
  await page.getByLabel('Product Name', { exact: true }).click();
  await page.getByLabel('Product Name Rewrite').click();
  await page.getByLabel('SKU').click();
  await page.getByLabel('notice-WSWOVWY').selectOption('32568');
  await page.getByText('Downloadable Information Changes have been made to this section that have not').click();
  await page.getByLabel('notice-I4JBQ41').selectOption('168');
  await page.getByLabel('Product Name', { exact: true }).click();
  await page.getByLabel('Product Name', { exact: true }).fill('asdasds');
  await page.getByLabel('Product Name Rewrite').click();
  await page.getByLabel('Product Name Rewrite').fill('fsdf');
  await page.getByLabel('€').click();
  await page.getByLabel('€').fill('454');
  await page.getByLabel('Seller Price').click();
  await page.getByLabel('Seller Price').fill('sdfsdfsd');
  await page.getByLabel('Quantity').click();
  await page.getByLabel('Quantity').fill('dsfsd');
  await page.getByLabel('Item Length').click();
  await page.getByLabel('Item Width').click();
  await page.getByLabel('Item Width').fill('fsdf');
  await page.getByText('Enable Product Attribute Set').click();
  await page.getByLabel('Item Width').fill('fsdfsdf4');
  await page.getByLabel('Quantity').click();
  await page.getByLabel('Quantity').dblclick();
  await page.getByLabel('Quantity').fill('33');
  await page.locator('fieldset:nth-child(12) > div:nth-child(3) > .admin__field-control').click();
  await page.getByText('Stock Status In StockOut of').click();
});