Feature: Verify cases related to products add/update/delete process

Background:
Given the user is on the Magento login page
When the user logins with valid credentials
Then Magento dashboard is opened

@smoke
Scenario: Admin is able to create a new Simple product in admin with needed attributes, C122
Then the user navigates to "products" page
Then the user selects to create "simple" product
Then the "New Product" form should be displayed
Then the user fills in the required fields with the valid data
And the user saves the product
Then the product should be successfully created
And the "simple" product should appear in the product grid

@smoke
Scenario: Admin is able to create a new Simple product in admin with needed attributes, C1223
Then the user navigates to "products" page
Then the user selects to create "simple" product
Then the "New Product" form should be displayed
Then the user fills in the required fields with the valid data
And the user saves the product
Then the product should be successfully created
And the "simple" product should appear in the product grid

@smoke
Scenario: Admin is able to create a new Simple product in admin with needed attributes, C12234
Then the user navigates to "products" page
Then the user selects to create "simple" product
Then the "New Product" form should be displayed
Then the user fills in the required fields with the valid data
And the user saves the product
Then the product should be successfully created
And the "simple" product should appear in the product grid

@smoke
Scenario: Admin is able to create a new Simple product in admin with needed attributes, C12255
Then the user navigates to "products" page
Then the user selects to create "simple" product
Then the "New Product" form should be displayed
Then the user fills in the required fields with the valid data
And the user saves the product
Then the product should be successfully created
And the "simple" product should appear in the product grid