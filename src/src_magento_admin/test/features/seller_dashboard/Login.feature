Feature: Seller Login
  As a seller
  I want to log in to the Seller Dashboard
  So that I can manage my account and products

  Scenario: Seller admin user is able to log-in into existing Seller Dashboard, C5
    Given the user is on the seller login page
    When the user logs in as "valid_user"
    Then the user should be redirected to the Seller Dashboard

