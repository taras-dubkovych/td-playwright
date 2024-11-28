Feature: Verify marketplace login functionality

@smoke
Scenario: Verify login for Magento admin user
Given the user is on the Magento login page
When the user logins with valid credentials
Then Magento dashboard is opened
