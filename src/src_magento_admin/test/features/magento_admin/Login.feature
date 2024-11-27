Feature: Verify marketplace login functionality

Scenario: login as a Magento admin user
Given the user is on the Magento login page
When the user logins with valid credentials
Then Magento dashboard is opened
