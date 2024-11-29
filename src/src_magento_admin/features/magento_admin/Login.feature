Feature: Verify marketplace login functionality

@regression
Scenario: Verify login for Magento admin user, C555555
Given the user is on the Magento login page
When the user logins with valid credentials
Then Magento dashboard is opened